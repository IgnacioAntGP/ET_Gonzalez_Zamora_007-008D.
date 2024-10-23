import { Component, OnInit } from '@angular/core';
import {  MenuController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Users } from 'src/interfaces/users';
import { Camera, CameraResultType,CameraSource } from '@capacitor/camera';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  userSession:string="";
  email:string="";
  userData: any;

  imagen:string='';

  modificarForm: FormGroup;

  alumno: Users={
    id:"",
    rut:"",
    nombre:"",
    username:"",
    password:"",
    email:"",
    imagen:"",
    isactive: false
  }

  constructor(private menucontroller:MenuController,
              private httpclient: HttpClient,
              private router: Router,
              private auth:AuthService,
              private fBuilder: FormBuilder,
              private alertcontroller: AlertController) {
                this.modificarForm = this.fBuilder.group({
                  'email': new FormControl ("", [Validators.required, Validators.email]),
                  'nombre': new FormControl("", [Validators.required]),
                  'password': new FormControl ("", [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
                })
              }

  ngOnInit() {
    this.userSession = sessionStorage.getItem('username') || 'Usuario';
    this.obtenerData();
    console.log('este es el alumno: ',this.alumno)

  }

  EditarPerfil(){
    if (this.modificarForm.valid){
      this.auth.getByUsername(this.modificarForm.value.username).subscribe(resp=>{
        this.userData = resp;
          this.alumno.nombre = this.modificarForm.value.nombre;
          this.alumno.password = this.modificarForm.value.password;
          this.alumno.email = this.modificarForm.value.email;
          if (this.imagen){
            this.alumno.imagen = this.imagen;
          }
          this.auth.putUsuario(this.alumno).subscribe();
          this.modificarForm.reset();
          this.mostrarMensaje();
          this.router.navigateByUrl('/inicio');
      })
    }
  }
  async mostrarMensaje(){
    const alerta = await this.alertcontroller.create({
      header: 'Usuario modificado',
      message: 'Bienvenid@! ' + this.alumno.username,
      buttons: ['OK']
    });
    alerta.present();
  }

  obtenerData(){
    this.auth.getByUsername(this.userSession).subscribe(resp =>{
      this.userData = resp
      this.alumno.id = this.userData[0].id;
      this.alumno.username = this.userData[0].username;
      this.alumno.rut = this.userData[0].rut;
      this.alumno.nombre = this.userData[0].nombre;
      this.alumno.password = this.userData[0].password;
      this.alumno.email = this.userData[0].email;
      if(!this.imagen){
        this.alumno.imagen = this.userData[0].imagen;
      }
      this.alumno.isactive = this.userData[0].isactive;
      console.log('alumno: ', this.alumno.nombre)
    });
  }
  
  mostrarMenu(){
    this.menucontroller.open('first');
  }

  async seleccionImagen(){
    const imagen = await Camera.getPhoto({
      quality:90,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source: CameraSource.Photos
    });
    this.imagen = 'data: imagen/jpeg;base64,'+imagen.base64String;
  }
}

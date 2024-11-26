import { Component, OnInit } from '@angular/core';
import {  MenuController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Users } from 'src/interfaces/users';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  userSession:string="";
  email:string="";
  userData: any;

  modificarForm: FormGroup;

  docente: Users={
    id:"",
    rut_docente:"",
    nombre:"",
    username:"",
    password:"",
    email:"",
    isactive: false
  }

  constructor (private menucontroller:MenuController,
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
    console.log('este es el docente: ',this.docente)

  }

  EditarPerfil(){
    if (this.modificarForm.valid){
      this.auth.getByUsername(this.modificarForm.value.username).subscribe(resp=>{
        this.userData = resp;
          this.docente.nombre = this.modificarForm.value.nombre;
          this.docente.password = this.modificarForm.value.password;
          this.docente.email = this.modificarForm.value.email;
          this.auth.putUsuario(this.docente).subscribe();
          this.modificarForm.reset();
          this.mostrarMensaje();
          this.router.navigateByUrl('/inicio');
      })
    }
  }
  async mostrarMensaje(){
    const alerta = await this.alertcontroller.create({
      header: 'Usuario modificado',
      message: 'Bienvenid@! ' + this.docente.username,
      buttons: ['OK']
    });
    alerta.present();
  }

  obtenerData(){
    this.auth.getByUsername(this.userSession).subscribe(resp =>{
      this.userData = resp
      this.docente.id = this.userData[0].id;
      this.docente.username = this.userData[0].username;
      this.docente.rut_docente = this.userData[0].rut_docente;
      this.docente.nombre = this.userData[0].nombre;
      this.docente.password = this.userData[0].password;
      this.docente.email = this.userData[0].email;
      this.docente.isactive = this.userData[0].isactive;
      console.log('docente: ', this.docente.nombre)
    });
  }
  
  mostrarMenu(){
    this.menucontroller.open('first');
  }

}

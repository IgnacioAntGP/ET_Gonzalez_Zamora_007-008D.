import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserNuevo } from 'src/interfaces/users';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Camera, CameraResultType,CameraSource } from '@capacitor/camera';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  registroForm: FormGroup;
  imagen:string='';

  nuevoUsuario: UserNuevo={
    username:"",
    rut:"",
    nombre:"",
    email:"",
    password:"",
    imagen:"",
    isactive: false
  }

  userdata: any;

  constructor(private router: Router,
              private alertController: AlertController,
              private authservice: AuthService,
              private fBuilder: FormBuilder,) {
                this.registroForm = this.fBuilder.group({
                  'username': new FormControl ("", [Validators.required, Validators.minLength(6)]),
                  'email': new FormControl ("", [Validators.required, Validators.email]),
                  'rut': new FormControl ("", [Validators.required, Validators.minLength(9),Validators.pattern(/^\d{8}[\dkK]$/)]),
                  'nombre': new FormControl("", [Validators.required]),
                  'password': new FormControl ("", [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
                })
              }

  ngOnInit() {
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

  registroAlumno(){
    if (this.registroForm.valid){
      this.authservice.getByUsername(this.registroForm.value.username).subscribe(resp=>{
        this.userdata = resp;
        if(this.userdata.length>0){
           this.registroForm.reset();
          this.duplicidad();
        }
        else{
          this.nuevoUsuario.username = this.registroForm.value.username;
          this.nuevoUsuario.rut = this.registroForm.value.rut;
          this.nuevoUsuario.nombre = this.registroForm.value.nombre;
          this.nuevoUsuario.password = this.registroForm.value.password;
          this.nuevoUsuario.email = this.registroForm.value.email;
          this.nuevoUsuario.imagen = this.imagen;
          this.nuevoUsuario.isactive=true;
          this.authservice.postUsuario(this.nuevoUsuario).subscribe();
          this.registroForm.reset();
          this.mostrarMensaje();
          this.router.navigateByUrl('/inicio');
        }
      })
    }
  }

  async mostrarMensaje(){
    const alerta = await this.alertController.create({
      header: 'Usuario creado',
      message: 'Bienvenid@! ' + this.nuevoUsuario.username,
      buttons: ['OK']
    });
    alerta.present();
  }

  async duplicidad(){
    const alerta = await this.alertController.create({
      header: 'Error..',
      message: 'Usted '+ this.nuevoUsuario.username + ' ya esta registrado:D',
      buttons: ['OK']
    });
    alerta.present();
  }

}

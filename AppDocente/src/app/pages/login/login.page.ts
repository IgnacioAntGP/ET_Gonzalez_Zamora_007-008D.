import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder,Validators,FormGroup,FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userdata:any;
  usuario={
    rut_docente:"",
    nombre:"",
    username:"",
    email:"",
    password:"",
    isactive:false
  }

  loginForm:FormGroup;

  constructor(private router: Router,private alertController: AlertController,
              private authservice: AuthService, private toast: ToastController,
              private builder: FormBuilder) {
                this.loginForm = this.builder.group({
                  'username' : new FormControl("", [Validators.required, Validators.minLength(4)]),
                  'password' : new FormControl("", [Validators.required, Validators.minLength(8)]),
                });}

  ngOnInit() {
  }

  login(){
    if(!this.loginForm.valid){
      return;
    }
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    this.authservice.getByUsername(username).subscribe(resp =>{
      this.userdata =resp;
      console.log(this.userdata);
      if(this.userdata.length ===0){
        this.loginForm.reset();
        this.UsuarioNoExiste();
        return;
      }

      this.usuario={
        rut_docente: this.userdata[0].rut,
        username: this.userdata[0].username,
        nombre: this.userdata[0].nombre,
        password: this.userdata[0].password,
        email: this.userdata[0].email,
        isactive: this.userdata[0].isactive
      }

      if(this.usuario.password !== password){
        this.loginForm.reset();
        this.ErrorUsuario();
        return;
      }
      if(!this.usuario.isactive){
        this.loginForm.reset();
        this.UsuarioInactivo();
        return;
      }
      this.IniciarSesion(this.usuario)
    })
  }

  private IniciarSesion(usuario:any){
    sessionStorage.setItem('username', usuario.username);
    sessionStorage.setItem('password', usuario.password);
    sessionStorage.setItem('rut', usuario.rut)
    sessionStorage.setItem('ingresado', 'true');
    this.showToast('sesion Iniciada');
    this.router.navigate(["/menu-principal"]);
  }

  async showToast(msg: any){
    const toast = await this.toast.create({
      message:msg,
      duration: 3000
    })
    toast.present();
  }

  async UsuarioInactivo(){
    const alerta = await this.alertController.create({
      header: 'Usuario inactivo',
      message: 'Contactar a admin@admin.cl',
      buttons: ['OK']
    })
    alerta.present();
  }

  async ErrorUsuario(){
    const alerta = await this.alertController.create({
      header: 'Error..',
      message: 'Revise sus credenciales',
      buttons: ['OK']
    })
    alerta.present();
  }

  async UsuarioNoExiste(){
    const alerta = await this.alertController.create({
      header: 'No existe',
      message: 'Debe registrarse',
      buttons: ['OK']
    })
    alerta.present();
  }

}

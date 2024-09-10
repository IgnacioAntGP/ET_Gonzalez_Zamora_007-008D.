import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  correo="";
  password="";

  constructor(private router: Router,private alertController: AlertController) { }

  ngOnInit() {
  }

  async ingresoAlumno(){
    const alert = await this.alertController.create({
      mode:'ios',
      header: 'Ingresando...\n' + this.correo,
      buttons:[
        {
          text: 'Continuar',
          role: 'confirm',
          handler: () => {
            console.log(this.correo);
            console.log(this.password);

            console.log('Redireccionando...');
            this.router.navigate(['/alumno'])
          }
        },
      ],
    });

    console.log('Botón funcionando');
    await alert.present();

  }

  recuperarCon(){
    this.router.navigate(['/recuperar'])
  }

}

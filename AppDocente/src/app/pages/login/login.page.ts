import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email = "";
  password = "";
  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  async login(){
    const alert = await this.alertController.create({
      mode:'ios',
      header: 'Ingresando...\n' + this.email,
      buttons:[
        {
          text: 'Continuar',
          role: 'confirm',
          handler: () => {
            console.log(this.email);
            console.log(this.password);

            console.log('Redireccionando...');
            this.router.navigate(['/menu-principal'])
          }
        },
      ],
    });

    console.log('Botón funcionando');
    await alert.present();

  }

}

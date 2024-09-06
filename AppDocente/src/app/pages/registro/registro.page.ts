import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  email='';
  password1='';
  password2='';

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  async register(){
    const alert = await this.alertController.create({
      mode:'ios',
      header: 'Registro completo',
      buttons:[
        {
          text: 'Continuar',
          role: 'confirm',
          handler: () => {
            console.log(this.email);
            console.log(this.password1);
            console.log(this.password2);

            console.log('Redireccionando...');
            this.router.navigate(['/inicio'])
          }
        },
      ],
    });

    console.log('Botón funcionando');
    await alert.present();

  }

}

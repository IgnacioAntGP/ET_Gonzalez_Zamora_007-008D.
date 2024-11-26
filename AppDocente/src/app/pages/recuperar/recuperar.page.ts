import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})

export class RecuperarPage implements OnInit {

  password="";

  constructor(private router: Router,private alertController: AlertController) { }

  ngOnInit() {
  }

   async recuperacion(){
    const alert = await this.alertController.create({
      mode:'ios',
      header: 'Contraseña Actualizada',
      buttons:[
        {
          text: 'Continuar',
          role: 'confirm',
          handler: () => {
            console.log('Redireccionando...');
            this.router.navigate(['/login'])
          }
        },
      ],
    });

    console.log('Botón funcionando');
    await alert.present();

  }
}



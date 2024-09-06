import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-clase',
  templateUrl: './info-clase.page.html',
  styleUrls: ['./info-clase.page.scss'],
})
export class InfoClasePage implements OnInit {
  modulo = '';
  fecha='';
  sala='';

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  async activarCamara(){
    const alert = await this.alertController.create({
      header: 'Activando cámara',
      subHeader:'Tomando asistencia de:',
      message:  'Modulo: ' +
                this.modulo +
                '\nFecha: ' +
                this.fecha +
                '\nSala: ' +
                this.sala,
      buttons:[
        {
          text:'Rechazar',
          role:'cancel',
          handler: () => {
            console.log('Camara no activada');
          }
        },
        {
          text:'Aceptar',
          role:'confirm',
          handler: () => {
            console.log(this.modulo);
            console.log(this.sala);
            this.router.navigate(['/camara']);
          }
        },
      ]
    });

    await alert.present();

    await alert.onDidDismiss();
  }

  async verAsistencia(){
    const alert = await this.alertController.create({
      header: 'Asistencia',
      message:  'Modulo: ' +
                this.modulo +
                '\nFecha: ' +
                this.fecha +
                '\nSala: ' +
                this.sala,
      buttons:[
        {
          text:'Rechazar',
          role:'cancel',
          handler: () => {
            console.log('CANCELADO');
          }
        },
        {
          text:'Aceptar',
          role:'confirm',
          handler: () => {
            console.log(this.modulo);
            console.log(this.sala);
            this.router.navigate(['/asistencia']);
          }
        },
      ]
    });

    await alert.present();

    await alert.onDidDismiss();
  }

}

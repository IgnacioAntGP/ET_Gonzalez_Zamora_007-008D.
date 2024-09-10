import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-justificacion',
  templateUrl: './justificacion.page.html',
  styleUrls: ['./justificacion.page.scss'],
})
export class JustificacionPage implements OnInit {

  constructor(private alertcontroller: AlertController,
    private router: Router) { }

  ngOnInit() {
  }

  async justificacion(){
    const alert = await this.alertcontroller.create({
      header: 'Justificacion Enviada',
      mode:'ios',
      cssClass:'alertHeader',
      buttons: [
       {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.router.navigate(['/clase']);
          },
        },
      ],
    });

    await alert.present();
   
  }
}



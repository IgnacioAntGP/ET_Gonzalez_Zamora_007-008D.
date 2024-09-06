import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  nombre = "";
  email = "";
  comentario = "";
  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  async enviar(){
    const alert = await this.alertController.create({
      cssClass: 'alertContact',
      mode:'ios',
      header: 'Gracias por contactarnos!\n' + this.email,
      message: 'Su valoración nos ayuda a mejorar nuestra aplicación',
      buttons:[
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log(this.nombre);
            console.log(this.comentario);
  
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

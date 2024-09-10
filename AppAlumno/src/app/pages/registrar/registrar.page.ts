import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  correo="";
  password="";
  password1="";

  constructor(private router: Router,private alertController: AlertController) { }

  ngOnInit() {
  }

  async registroAlumno(){
    const alert = await this.alertController.create({
      mode:'ios',
      header: 'Registro Exitoso',
      buttons:[
        {
          text: 'Continuar',
          role: 'confirm',
          handler: () => {
            console.log(this.correo);
            console.log(this.password);

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

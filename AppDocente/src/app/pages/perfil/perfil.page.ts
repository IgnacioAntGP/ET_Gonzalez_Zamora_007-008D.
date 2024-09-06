import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  nombre= 'Viviana Soledad Poblete Lopez';

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async editarPerfil(){
    const alert = await this.alertController.create({
      header: 'Editar perfil',
      subHeader: this.nombre,
      buttons:['OK'],
    });
    await alert.present();

    await alert.onDidDismiss();
  }

}

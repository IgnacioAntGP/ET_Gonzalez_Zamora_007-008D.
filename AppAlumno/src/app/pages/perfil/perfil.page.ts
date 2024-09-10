import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  nombre='Viviana Poblete';

  constructor(private menucontroller: MenuController, private alertController: AlertController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menucontroller.open('first');
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

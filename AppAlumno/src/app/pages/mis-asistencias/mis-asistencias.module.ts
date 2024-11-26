import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisAsistenciasPageRoutingModule } from './mis-asistencias-routing.module';

import { MisAsistenciasPage } from './mis-asistencias.page';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisAsistenciasPageRoutingModule,
    QRCodeModule
  ],
  declarations: [MisAsistenciasPage]
})
export class MisAsistenciasPageModule {}

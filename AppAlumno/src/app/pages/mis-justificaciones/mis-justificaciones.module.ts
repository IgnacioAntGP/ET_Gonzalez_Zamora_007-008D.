import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisJustificacionesPageRoutingModule } from './mis-justificaciones-routing.module';

import { MisJustificacionesPage } from './mis-justificaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisJustificacionesPageRoutingModule
  ],
  declarations: [MisJustificacionesPage]
})
export class MisJustificacionesPageModule {}

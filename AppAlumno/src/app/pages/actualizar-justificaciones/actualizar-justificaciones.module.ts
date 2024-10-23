import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarJustificacionesPageRoutingModule } from './actualizar-justificaciones-routing.module';

import { ActualizarJustificacionesPage } from './actualizar-justificaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarJustificacionesPageRoutingModule
  ],
  declarations: [ActualizarJustificacionesPage]
})
export class ActualizarJustificacionesPageModule {}

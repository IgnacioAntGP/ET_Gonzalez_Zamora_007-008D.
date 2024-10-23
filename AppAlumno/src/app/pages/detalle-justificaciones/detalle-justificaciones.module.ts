import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleJustificacionesPageRoutingModule } from './detalle-justificaciones-routing.module';

import { DetalleJustificacionesPage } from './detalle-justificaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleJustificacionesPageRoutingModule
  ],
  declarations: [DetalleJustificacionesPage]
})
export class DetalleJustificacionesPageModule {}

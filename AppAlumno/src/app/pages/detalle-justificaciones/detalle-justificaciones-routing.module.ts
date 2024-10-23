import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleJustificacionesPage } from './detalle-justificaciones.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleJustificacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleJustificacionesPageRoutingModule {}

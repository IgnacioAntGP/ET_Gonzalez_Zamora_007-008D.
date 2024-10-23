import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarJustificacionesPage } from './actualizar-justificaciones.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarJustificacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarJustificacionesPageRoutingModule {}

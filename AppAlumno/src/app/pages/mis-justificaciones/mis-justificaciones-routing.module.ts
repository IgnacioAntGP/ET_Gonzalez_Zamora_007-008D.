import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisJustificacionesPage } from './mis-justificaciones.page';

const routes: Routes = [
  {
    path: '',
    component: MisJustificacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisJustificacionesPageRoutingModule {}

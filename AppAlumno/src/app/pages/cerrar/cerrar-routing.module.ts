import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CerrarPage } from './cerrar.page';

const routes: Routes = [
  {
    path: '',
    component: CerrarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CerrarPageRoutingModule {}

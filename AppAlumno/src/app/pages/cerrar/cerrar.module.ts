import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CerrarPageRoutingModule } from './cerrar-routing.module';

import { CerrarPage } from './cerrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CerrarPageRoutingModule
  ],
  declarations: [CerrarPage]
})
export class CerrarPageModule {}

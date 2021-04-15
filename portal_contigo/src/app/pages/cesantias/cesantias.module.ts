import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CesantiasPageRoutingModule } from './cesantias-routing.module';

import { CesantiasPage } from './cesantias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CesantiasPageRoutingModule
  ],
  declarations: [CesantiasPage]
})
export class CesantiasPageModule {}

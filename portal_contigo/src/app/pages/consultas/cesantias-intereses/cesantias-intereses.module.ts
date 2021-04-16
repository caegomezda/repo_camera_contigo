import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CesantiasInteresesPageRoutingModule } from './cesantias-intereses-routing.module';

import { CesantiasInteresesPage } from './cesantias-intereses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CesantiasInteresesPageRoutingModule
  ],
  declarations: [CesantiasInteresesPage]
})
export class CesantiasInteresesPageModule {}

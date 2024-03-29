import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuxiliosConvecionalesPageRoutingModule } from './auxilios-convecionales-routing.module';

import { AuxiliosConvecionalesPage } from './auxilios-convecionales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuxiliosConvecionalesPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AuxiliosConvecionalesPage]
})
export class AuxiliosConvecionalesPageModule {}

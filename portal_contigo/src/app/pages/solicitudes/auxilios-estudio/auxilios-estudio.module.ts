import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuxiliosEstudioPageRoutingModule } from './auxilios-estudio-routing.module';

import { AuxiliosEstudioPage } from './auxilios-estudio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuxiliosEstudioPageRoutingModule
  ],
  declarations: [AuxiliosEstudioPage]
})
export class AuxiliosEstudioPageModule {}

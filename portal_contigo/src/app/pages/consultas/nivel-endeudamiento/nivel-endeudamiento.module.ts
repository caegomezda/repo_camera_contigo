import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NivelEndeudamientoPageRoutingModule } from './nivel-endeudamiento-routing.module';

import { NivelEndeudamientoPage } from './nivel-endeudamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NivelEndeudamientoPageRoutingModule
  ],
  declarations: [NivelEndeudamientoPage]
})
export class NivelEndeudamientoPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambioBeneficiarioPageRoutingModule } from './cambio-beneficiario-routing.module';

import { CambioBeneficiarioPage } from './cambio-beneficiario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambioBeneficiarioPageRoutingModule
  ],
  declarations: [CambioBeneficiarioPage]
})
export class CambioBeneficiarioPageModule {}

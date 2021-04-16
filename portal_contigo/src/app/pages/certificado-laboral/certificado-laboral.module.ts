import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertificadoLaboralPageRoutingModule } from './certificado-laboral-routing.module';

import { CertificadoLaboralPage } from './certificado-laboral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CertificadoLaboralPageRoutingModule
  ],
  declarations: [CertificadoLaboralPage]
})
export class CertificadoLaboralPageModule {}

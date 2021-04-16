import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertificadosIngresosPageRoutingModule } from './certificados-ingresos-routing.module';

import { CertificadosIngresosPage } from './certificados-ingresos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CertificadosIngresosPageRoutingModule
  ],
  declarations: [CertificadosIngresosPage]
})
export class CertificadosIngresosPageModule {}

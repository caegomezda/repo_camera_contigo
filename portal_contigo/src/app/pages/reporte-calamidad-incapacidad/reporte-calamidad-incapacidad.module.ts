import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReporteCalamidadIncapacidadPageRoutingModule } from './reporte-calamidad-incapacidad-routing.module';

import { ReporteCalamidadIncapacidadPage } from './reporte-calamidad-incapacidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReporteCalamidadIncapacidadPageRoutingModule
  ],
  declarations: [ReporteCalamidadIncapacidadPage]
})
export class ReporteCalamidadIncapacidadPageModule {}

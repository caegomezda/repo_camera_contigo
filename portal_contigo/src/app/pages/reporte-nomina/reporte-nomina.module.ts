import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReporteNominaPageRoutingModule } from './reporte-nomina-routing.module';

import { ReporteNominaPage } from './reporte-nomina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReporteNominaPageRoutingModule
  ],
  declarations: [ReporteNominaPage]
})
export class ReporteNominaPageModule {}

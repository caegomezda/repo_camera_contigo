import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NominaDetallePageRoutingModule } from './nomina-detalle-routing.module';

import { NominaDetallePage } from './nomina-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NominaDetallePageRoutingModule
  ],
  declarations: [NominaDetallePage]
})
export class NominaDetallePageModule {}

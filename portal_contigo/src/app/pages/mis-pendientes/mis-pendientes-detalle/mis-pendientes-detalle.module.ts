import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisPendientesDetallePageRoutingModule } from './mis-pendientes-detalle-routing.module';

import { MisPendientesDetallePage } from './mis-pendientes-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisPendientesDetallePageRoutingModule
  ],
  declarations: [MisPendientesDetallePage]
})
export class MisPendientesDetallePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitasDetallePageRoutingModule } from './citas-detalle-routing.module';

import { CitasDetallePage } from './citas-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitasDetallePageRoutingModule
  ],
  declarations: [CitasDetallePage]
})
export class CitasDetallePageModule {}

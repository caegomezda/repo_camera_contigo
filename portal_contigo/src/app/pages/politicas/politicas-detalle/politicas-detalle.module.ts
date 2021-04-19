import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoliticasDetallePageRoutingModule } from './politicas-detalle-routing.module';

import { PoliticasDetallePage } from './politicas-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoliticasDetallePageRoutingModule
  ],
  declarations: [PoliticasDetallePage]
})
export class PoliticasDetallePageModule {}

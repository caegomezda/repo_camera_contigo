import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreguntasDetallePageRoutingModule } from './preguntas-detalle-routing.module';

import { PreguntasDetallePage } from './preguntas-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreguntasDetallePageRoutingModule
  ],
  declarations: [PreguntasDetallePage]
})
export class PreguntasDetallePageModule {}

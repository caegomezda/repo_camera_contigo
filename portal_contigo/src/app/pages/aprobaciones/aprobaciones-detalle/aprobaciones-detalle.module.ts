import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AprobacionesDetallePageRoutingModule } from './aprobaciones-detalle-routing.module';

import { AprobacionesDetallePage } from './aprobaciones-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AprobacionesDetallePageRoutingModule,    
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AprobacionesDetallePage]
})
export class AprobacionesDetallePageModule {}

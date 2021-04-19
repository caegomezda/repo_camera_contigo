import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarteleraDetallePageRoutingModule } from './cartelera-detalle-routing.module';

import { CarteleraDetallePage } from './cartelera-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarteleraDetallePageRoutingModule
  ],
  declarations: [CarteleraDetallePage]
})
export class CarteleraDetallePageModule {}

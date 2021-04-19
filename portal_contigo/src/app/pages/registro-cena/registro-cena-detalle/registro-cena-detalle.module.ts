import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroCenaDetallePageRoutingModule } from './registro-cena-detalle-routing.module';

import { RegistroCenaDetallePage } from './registro-cena-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroCenaDetallePageRoutingModule
  ],
  declarations: [RegistroCenaDetallePage]
})
export class RegistroCenaDetallePageModule {}

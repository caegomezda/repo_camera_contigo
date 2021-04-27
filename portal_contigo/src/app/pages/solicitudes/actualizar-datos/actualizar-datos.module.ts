import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarDatosPageRoutingModule } from './actualizar-datos-routing.module';

import { ActualizarDatosPage } from './actualizar-datos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarDatosPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ActualizarDatosPage]
})
export class ActualizarDatosPageModule {}

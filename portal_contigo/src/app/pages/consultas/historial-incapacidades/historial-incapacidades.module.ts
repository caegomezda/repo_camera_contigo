import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialIncapacidadesPageRoutingModule } from './historial-incapacidades-routing.module';

import { HistorialIncapacidadesPage } from './historial-incapacidades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialIncapacidadesPageRoutingModule
  ],
  declarations: [HistorialIncapacidadesPage]
})
export class HistorialIncapacidadesPageModule {}

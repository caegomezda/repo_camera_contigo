import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalificarServiciosPageRoutingModule } from './calificar-servicios-routing.module';

import { CalificarServiciosPage } from './calificar-servicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalificarServiciosPageRoutingModule
  ],
  declarations: [CalificarServiciosPage]
})
export class CalificarServiciosPageModule {}

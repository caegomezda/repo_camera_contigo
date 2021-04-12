import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisPendientesPageRoutingModule } from './mis-pendientes-routing.module';

import { MisPendientesPage } from './mis-pendientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisPendientesPageRoutingModule
  ],
  declarations: [MisPendientesPage]
})
export class MisPendientesPageModule {}

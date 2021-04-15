import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequesitosSolicitudesPageRoutingModule } from './requesitos-solicitudes-routing.module';

import { RequesitosSolicitudesPage } from './requesitos-solicitudes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequesitosSolicitudesPageRoutingModule
  ],
  declarations: [RequesitosSolicitudesPage]
})
export class RequesitosSolicitudesPageModule {}

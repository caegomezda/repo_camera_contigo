import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialPermisosPageRoutingModule } from './historial-permisos-routing.module';

import { HistorialPermisosPage } from './historial-permisos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialPermisosPageRoutingModule
  ],
  declarations: [HistorialPermisosPage]
})
export class HistorialPermisosPageModule {}

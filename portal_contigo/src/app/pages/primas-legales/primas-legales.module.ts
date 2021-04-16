import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimasLegalesPageRoutingModule } from './primas-legales-routing.module';

import { PrimasLegalesPage } from './primas-legales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimasLegalesPageRoutingModule
  ],
  declarations: [PrimasLegalesPage]
})
export class PrimasLegalesPageModule {}

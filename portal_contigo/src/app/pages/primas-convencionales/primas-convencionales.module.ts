import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimasConvencionalesPageRoutingModule } from './primas-convencionales-routing.module';

import { PrimasConvencionalesPage } from './primas-convencionales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimasConvencionalesPageRoutingModule
  ],
  declarations: [PrimasConvencionalesPage]
})
export class PrimasConvencionalesPageModule {}

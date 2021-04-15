import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamaraPagePageRoutingModule } from './camara-page-routing.module';

import { CamaraPagePage } from './camara-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamaraPagePageRoutingModule
  ],
  declarations: [CamaraPagePage]
})
export class CamaraPagePageModule {}

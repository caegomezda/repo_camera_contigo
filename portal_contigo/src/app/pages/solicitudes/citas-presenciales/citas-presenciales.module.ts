import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitasPresencialesPageRoutingModule } from './citas-presenciales-routing.module';

import { CitasPresencialesPage } from './citas-presenciales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitasPresencialesPageRoutingModule
  ],
  declarations: [CitasPresencialesPage]
})
export class CitasPresencialesPageModule {}

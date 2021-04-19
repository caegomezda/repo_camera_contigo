import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroCenaPageRoutingModule } from './registro-cena-routing.module';

import { RegistroCenaPage } from './registro-cena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroCenaPageRoutingModule
  ],
  declarations: [RegistroCenaPage]
})
export class RegistroCenaPageModule {}

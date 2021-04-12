import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponenteAuxilioConvencionalPageRoutingModule } from './componente-auxilio-convencional-routing.module';

import { ComponenteAuxilioConvencionalPage } from './componente-auxilio-convencional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponenteAuxilioConvencionalPageRoutingModule
  ],
  declarations: [ComponenteAuxilioConvencionalPage]
})
export class ComponenteAuxilioConvencionalPageModule {}

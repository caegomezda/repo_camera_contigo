import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponenteAuxilioConvencionalPage } from './componente-auxilio-convencional.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteAuxilioConvencionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponenteAuxilioConvencionalPageRoutingModule {}

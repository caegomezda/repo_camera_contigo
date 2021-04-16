import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NivelEndeudamientoPage } from './nivel-endeudamiento.page';

const routes: Routes = [
  {
    path: '',
    component: NivelEndeudamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NivelEndeudamientoPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambioBeneficiarioPage } from './cambio-beneficiario.page';

const routes: Routes = [
  {
    path: '',
    component: CambioBeneficiarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambioBeneficiarioPageRoutingModule {}

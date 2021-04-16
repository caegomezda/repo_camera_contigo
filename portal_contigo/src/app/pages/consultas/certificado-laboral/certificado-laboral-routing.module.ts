import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificadoLaboralPage } from './certificado-laboral.page';

const routes: Routes = [
  {
    path: '',
    component: CertificadoLaboralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificadoLaboralPageRoutingModule {}

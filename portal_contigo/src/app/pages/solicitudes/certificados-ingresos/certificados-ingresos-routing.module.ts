import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificadosIngresosPage } from './certificados-ingresos.page';

const routes: Routes = [
  {
    path: '',
    component: CertificadosIngresosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificadosIngresosPageRoutingModule {}

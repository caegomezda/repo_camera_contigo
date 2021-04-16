import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReporteNominaPage } from './reporte-nomina.page';

const routes: Routes = [
  {
    path: '',
    component: ReporteNominaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReporteNominaPageRoutingModule {}

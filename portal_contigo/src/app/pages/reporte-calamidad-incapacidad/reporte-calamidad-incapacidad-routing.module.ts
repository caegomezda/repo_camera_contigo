import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReporteCalamidadIncapacidadPage } from './reporte-calamidad-incapacidad.page';

const routes: Routes = [
  {
    path: '',
    component: ReporteCalamidadIncapacidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReporteCalamidadIncapacidadPageRoutingModule {}

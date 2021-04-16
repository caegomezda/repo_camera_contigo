import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NominaDetallePage } from './nomina-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: NominaDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NominaDetallePageRoutingModule {}

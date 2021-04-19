import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AprobacionesDetallePage } from './aprobaciones-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: AprobacionesDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AprobacionesDetallePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisPendientesDetallePage } from './mis-pendientes-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: MisPendientesDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisPendientesDetallePageRoutingModule {}

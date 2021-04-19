import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoliticasDetallePage } from './politicas-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: PoliticasDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoliticasDetallePageRoutingModule {}

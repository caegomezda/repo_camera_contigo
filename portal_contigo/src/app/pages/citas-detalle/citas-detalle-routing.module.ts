import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitasDetallePage } from './citas-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: CitasDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitasDetallePageRoutingModule {}

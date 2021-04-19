import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreguntasDetallePage } from './preguntas-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: PreguntasDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreguntasDetallePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarteleraDetallePage } from './cartelera-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: CarteleraDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarteleraDetallePageRoutingModule {}

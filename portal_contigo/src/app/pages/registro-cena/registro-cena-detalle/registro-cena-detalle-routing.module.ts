import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroCenaDetallePage } from './registro-cena-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroCenaDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroCenaDetallePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalificarServiciosPage } from './calificar-servicios.page';

const routes: Routes = [
  {
    path: '',
    component: CalificarServiciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalificarServiciosPageRoutingModule {}

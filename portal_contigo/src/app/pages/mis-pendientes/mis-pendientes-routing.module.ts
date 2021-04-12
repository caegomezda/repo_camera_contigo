import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisPendientesPage } from './mis-pendientes.page';

const routes: Routes = [
  {
    path: '',
    component: MisPendientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisPendientesPageRoutingModule {}

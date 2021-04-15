import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequesitosSolicitudesPage } from './requesitos-solicitudes.page';

const routes: Routes = [
  {
    path: '',
    component: RequesitosSolicitudesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequesitosSolicitudesPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialPermisosPage } from './historial-permisos.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialPermisosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialPermisosPageRoutingModule {}

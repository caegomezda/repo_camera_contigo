import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialIncapacidadesPage } from './historial-incapacidades.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialIncapacidadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialIncapacidadesPageRoutingModule {}

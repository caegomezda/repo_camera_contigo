import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CesantiasPage } from './cesantias.page';

const routes: Routes = [
  {
    path: '',
    component: CesantiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CesantiasPageRoutingModule {}

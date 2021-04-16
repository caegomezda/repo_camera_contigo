import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CesantiasInteresesPage } from './cesantias-intereses.page';

const routes: Routes = [
  {
    path: '',
    component: CesantiasInteresesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CesantiasInteresesPageRoutingModule {}

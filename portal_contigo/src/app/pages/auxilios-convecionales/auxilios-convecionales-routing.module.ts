import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuxiliosConvecionalesPage } from './auxilios-convecionales.page';

const routes: Routes = [
  {
    path: '',
    component: AuxiliosConvecionalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuxiliosConvecionalesPageRoutingModule {}

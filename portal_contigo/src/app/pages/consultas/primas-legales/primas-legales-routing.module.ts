import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimasLegalesPage } from './primas-legales.page';

const routes: Routes = [
  {
    path: '',
    component: PrimasLegalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimasLegalesPageRoutingModule {}

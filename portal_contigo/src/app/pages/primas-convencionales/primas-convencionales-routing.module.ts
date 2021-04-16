import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimasConvencionalesPage } from './primas-convencionales.page';

const routes: Routes = [
  {
    path: '',
    component: PrimasConvencionalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimasConvencionalesPageRoutingModule {}

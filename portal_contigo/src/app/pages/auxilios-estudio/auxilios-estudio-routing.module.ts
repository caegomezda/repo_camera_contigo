import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuxiliosEstudioPage } from './auxilios-estudio.page';

const routes: Routes = [
  {
    path: '',
    component: AuxiliosEstudioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuxiliosEstudioPageRoutingModule {}

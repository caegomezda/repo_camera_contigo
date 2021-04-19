import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroCenaPage } from './registro-cena.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroCenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroCenaPageRoutingModule {}

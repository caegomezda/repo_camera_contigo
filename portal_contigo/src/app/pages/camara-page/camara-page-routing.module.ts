import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamaraPagePage } from './camara-page.page';

const routes: Routes = [
  {
    path: '',
    component: CamaraPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamaraPagePageRoutingModule {}

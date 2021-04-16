import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitasPresencialesPage } from './citas-presenciales.page';

const routes: Routes = [
  {
    path: '',
    component: CitasPresencialesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitasPresencialesPageRoutingModule {}

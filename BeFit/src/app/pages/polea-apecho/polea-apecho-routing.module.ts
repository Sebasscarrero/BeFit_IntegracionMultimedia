import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoleaAPechoPage } from './polea-apecho.page';

const routes: Routes = [
  {
    path: '',
    component: PoleaAPechoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoleaAPechoPageRoutingModule {}

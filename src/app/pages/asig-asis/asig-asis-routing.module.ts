import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsigAsisPage } from './asig-asis.page';

const routes: Routes = [
  {
    path: '',
    component: AsigAsisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsigAsisPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatesPage } from './updates.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatesPageRoutingModule {}

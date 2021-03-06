import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDataComponent } from '../add-data/add-data.component';

const routes: Routes = [
  {
    path: '',
    component: AddDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddDataRoutingModule { }

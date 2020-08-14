import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyDataTableComponent } from '../my-data-table/my-data-table.component';

const routes: Routes = [
  {
    path: '',
    component: MyDataTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyDataTableRoutingModule { }

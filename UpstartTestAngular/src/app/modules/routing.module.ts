import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

// ng g m modules/routing --spec false --flat

const routes: Routes = [
    { path: "myDataTable",
    loadChildren: () => import('../components/data-elements/my-data-table/my-data-table.module').then(m => m.MyDataTableModule) },
    { path: "myDataAdd",
    loadChildren: () => import('../components/data-elements/add-data/add-data.module').then(m => m.AddDataModule) },
    { path: "myDataAdd/:id",
    loadChildren: () => import('../components/data-elements/add-data/add-data.module').then(m => m.AddDataModule) },
    { path: '', redirectTo: "myDataTable", pathMatch: "full" },
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forRoot(routes)]
})
export class RoutingModule { }

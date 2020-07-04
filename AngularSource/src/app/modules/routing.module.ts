import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { AddDataComponent } from '../components/data-elements/add-data/add-data.component';
import { MyDataTableComponent } from '../components/data-elements/my-data-table/my-data-table.component';

// ng g m modules/routing --spec false --flat

const routes: Routes = [
    { path: "myDataTable", component: MyDataTableComponent },
    { path: "myDataAdd", component: AddDataComponent },
    { path: "myDataAdd/:id", component: AddDataComponent },
    { path: '', redirectTo: "myDataTable", pathMatch: "full" },
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forRoot(routes)]
})
export class RoutingModule { }

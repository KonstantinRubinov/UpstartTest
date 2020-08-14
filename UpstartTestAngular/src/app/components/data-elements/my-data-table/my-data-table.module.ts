import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';

import { MyDataTableRoutingModule } from '../my-data-table/my-data-table-routing.module';
import { MyDataTableComponent } from '../my-data-table/my-data-table.component';

@NgModule({
  imports: [
    CommonModule,
    MyDataTableRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [MyDataTableComponent]
})
export class MyDataTableModule { }

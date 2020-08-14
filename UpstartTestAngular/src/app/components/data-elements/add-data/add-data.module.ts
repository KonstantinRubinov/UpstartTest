import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';

import { AddDataRoutingModule } from '../add-data/add-data-routing.module';
import { AddDataComponent } from '../add-data/add-data.component';

@NgModule({
  imports: [
    CommonModule,
    AddDataRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AddDataComponent]
})
export class AddDataModule { }

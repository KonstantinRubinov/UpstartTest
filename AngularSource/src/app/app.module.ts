import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { RoutingModule } from './modules/routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Store } from './redux/store';
import { NgReduxModule, NgRedux } from 'ng2-redux';
import { Reducer } from './redux/reducer';


import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddDataComponent } from './components/data-elements/add-data/add-data.component';
import { MyDataTableComponent } from './components/data-elements/my-data-table/my-data-table.component';
import { FooterComponent } from './components/design-elements/footer/footer.component';
import { HeaderComponent } from './components/design-elements/header/header.component';
import { LayoutComponent } from './components/design-elements/layout/layout.component';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AddDataComponent,
    MyDataTableComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent
  ],
  imports: [
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,

    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgReduxModule,
    CommonModule,
    BrowserAnimationsModule,
    RoutingModule
  ],
  providers: [CookieService ],
  bootstrap: [LayoutComponent]
})
export class AppModule { 
  public constructor(redux:NgRedux<Store>){
    redux.configureStore(Reducer.reduce, new Store());
  }
}

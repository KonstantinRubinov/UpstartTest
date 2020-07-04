import { Component, OnInit, OnDestroy } from '@angular/core';
import { Unsubscribe } from 'redux';
import { MyData } from 'src/app/models/MyData';
import { Router } from '@angular/router';
import { Store } from 'src/app/redux/store';
import { NgRedux } from 'ng2-redux';
import { MyNavigator } from 'src/app/models/MyNavigator';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private unsubscribe:Unsubscribe;
  public myData:MyData;

  
  
  constructor(private router: Router, private redux:NgRedux<Store>) { }

  public ngOnInit() {
  }
  
  public navigators = [
    new MyNavigator("/myDataTable", 'DataTable'),
    new MyNavigator("/myDataAdd", 'Add My Data')
  ];


  public ngOnDestroy(): void {
    this.unsubscribe();
  }
}

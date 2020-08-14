import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Store } from 'src/app/redux/store';
import { NgRedux } from 'ng2-redux';
import { Unsubscribe } from 'redux';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-my-data-table',
  templateUrl: './my-data-table.component.html',
  styleUrls: ['./my-data-table.component.css']
})
export class MyDataTableComponent implements OnInit, OnDestroy {

  @ViewChild(MatSort) sort: MatSort;

  public displayedColumns: string[] = ['id', 'name', 'description', 'amount', 'date', 'isPrivate'];
  public dataSource = new MatTableDataSource();
  private unsubscribe:Unsubscribe;
  
  constructor(private redux:NgRedux<Store>) {
    this.dataSource = this.redux.getState().dataSource;
    this.dataSource.sort = this.sort;
  }
  
  public ngOnInit(): void {
    this.dataSource = this.redux.getState().dataSource;
    this.dataSource.sort = this.sort;
    this.unsubscribe = this.redux.subscribe(()=>{
      this.dataSource = this.redux.getState().dataSource;
      this.dataSource.sort = this.sort;
    });
  }

  public ngOnDestroy(): void {
    this.unsubscribe();
  }
}
import { MyData } from '../models/MyData';
import { MatTableDataSource } from '@angular/material/table';

export class Store{
    public myDataTable:MyData[] = [];
    public dataSource = new MatTableDataSource(this.myDataTable);
    public myData:MyData = new MyData();
    
    public getAllMyDataError:string;
    public myDataError:string;
    public addMyDataError:string;
    public updateMyDataError:string;
    public deleteMyDataError:string;
}
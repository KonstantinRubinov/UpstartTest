import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgRedux } from 'ng2-redux';
import { Store } from '../redux/store';
import { Action } from '../redux/action';
import { ActionType } from '../redux/action-type';
import { Router } from '@angular/router';
import { LogService } from './log.service';
import { Observable } from 'rxjs';
import { MyData } from '../models/MyData';
import { datasUrl } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MyDataService {

  public constructor(private http: HttpClient,
                     private redux: NgRedux<Store>,
                     private router: Router,
                     private logger: LogService) { }

  public GetMyDataTable(): void {
    let observable = this.http.get<MyData[]>(datasUrl);
    observable.subscribe(MyDataTable=>{
      const action: Action={type:ActionType.GetAllMyData, payload:MyDataTable};
      this.redux.dispatch(action);
      this.logger.debug("GetAllMyData: ", MyDataTable);
    }, error => {
      const action: Action={type:ActionType.GetAllMyDataError, payload:error.message};
      this.redux.dispatch(action);
      alert ("GetAllMyDataError: " + error.message);
      this.logger.error("GetAllMyDataError: ", error.message);
    });
  }

  public GetMyDataById(id:string): Observable<MyData> {
    return this.http.get<MyData>(datasUrl+id);
  }

  public AddMyData(myData:MyData): void {
    let observable = this.http.post<MyData>(datasUrl, myData);
    observable.subscribe(postedMyData=>{
      const action: Action={type:ActionType.AddMyData, payload:postedMyData};
      this.redux.dispatch(action);
      this.logger.debug("AddMyData: ", postedMyData);
      this.router.navigate(["/myDataTable"]);
    }, error => {
      const action: Action={type:ActionType.AddMyDataError, payload:error.message};
      this.redux.dispatch(action);
      alert ("AddMyDataError: " + error.message);
      this.logger.error("AddMyDataError: ", error.message);
    });
  }

  public UpdateMyData(myData:MyData): void {
    let observable = this.http.put<MyData>(datasUrl+myData.id, myData);
    observable.subscribe(updatedMyData=>{
      const action: Action={type:ActionType.UpdateMyData, payload:updatedMyData};
      this.redux.dispatch(action);
      this.logger.debug("UpdateMyData: ", updatedMyData);
      this.router.navigate(["/myDataTable"]);
    }, error => {
      const action: Action={type:ActionType.UpdateMyDataError, payload:error.message};
      this.redux.dispatch(action);
      alert ("UpdateMyDataError: " + error.message);
      this.logger.error("UpdateMyDataError: ", error.message);
    });
  }
  
    public DeleteMyData(myData:MyData): void {
      let observable =  this.http.delete(datasUrl+myData.id, {observe: 'response',    
        headers: { 'Content-Type': 'application/json' }   
      });
      observable.subscribe(deletedUser =>{
        this.logger.debug("DeleteFromEntities result status: ", deletedUser.status);
        if (deletedUser.status===204){
          const action: Action={type:ActionType.DeleteMyData, payload:myData.id };
          this.redux.dispatch(action);
          this.logger.debug("DeleteFromEntities: ", myData.id);
          this.router.navigate(["/myDataTable"]);
        }
      }, error => {
        const action: Action={type:ActionType.DeleteMyDataError, payload:error.message};
        this.redux.dispatch(action);
        this.logger.error("DeleteMyDataError: ", error.message);
        alert ("DeleteMyDataError: " + error.message);
      });
    }
}

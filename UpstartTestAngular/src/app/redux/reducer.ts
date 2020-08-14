import { Store } from "./store";
import { Action } from "./action";
import { ActionType } from "./action-type";
import { MatTableDataSource } from '@angular/material/table';
import { MyData } from '../models/MyData';

export class Reducer{
    public static reduce(oldStore: Store, action:Action):Store{
        let newStore:Store = {...oldStore};

        switch(action.type){
            case ActionType.GetAllMyData:
                newStore.myDataTable = action.payload.map(x => new MyData(x.id, x.name, x.description, x.amount, x.date, x.isPrivate));
                newStore.dataSource = new MatTableDataSource(newStore.myDataTable);
                break;
            case ActionType.GetAllMyDataError:
                newStore.getAllMyDataError=action.payload;
                break;
                
            case ActionType.GetMyDataById:
                newStore.myData=new MyData(action.payload.id, action.payload.name, action.payload.description, action.payload.amount, action.payload.date, action.payload.isPrivate);
                break;
            case ActionType.GetMyDataByIdError:
                newStore.myDataError=action.payload;
                break;
                
            case ActionType.AddMyData:
                let addMyData = new MyData(action.payload.id, action.payload.name, action.payload.description, action.payload.amount, action.payload.date, action.payload.isPrivate);
                newStore.myDataTable.push(addMyData);
                newStore.dataSource = new MatTableDataSource(newStore.myDataTable);
                break;
            case ActionType.AddMyDataError:
                newStore.addMyDataError=action.payload;
                break;
                
            case ActionType.UpdateMyData:
                let updateMyData = new MyData(action.payload.id, action.payload.name, action.payload.description, action.payload.amount, action.payload.date, action.payload.isPrivate);
                let itemIndex2 = newStore.myDataTable.findIndex(item => item.id === updateMyData.id);
                    newStore.myDataTable[itemIndex2] = updateMyData;
                    newStore.dataSource = new MatTableDataSource(newStore.myDataTable);
                break;
            case ActionType.UpdateMyDataError:
                newStore.updateMyDataError=action.payload;
                break;


            case ActionType.DeleteMyData:
                newStore.myDataTable.forEach( (item, index) => {
                    if(item.id === action.payload)
                        newStore.myDataTable.splice(index,1);
                    });
                    newStore.dataSource = new MatTableDataSource(newStore.myDataTable);
                break;
            case ActionType.DeleteMyDataError:
                newStore.deleteMyDataError=action.payload;
                break;
        }
        return newStore;
    }
}
import { Component, OnInit } from '@angular/core';
import { MyData } from 'src/app/models/MyData';
import { MyDataService } from 'src/app/services/my-data.service';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  public today:string = new Date().toISOString().slice(0, 10);
  id = new FormControl();
  name = new FormControl('', [Validators.required, Validators.maxLength(100)]);
  amount = new FormControl('', [Validators.maxLength(6)]);

  textAmount="";


  public myData:MyData = new MyData();
  
  public isPrivate:string;
  public dateToShow:any;
  public idFrom:string="";

  public isPrivateArr: string[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private myDataService: MyDataService,
              private logger: LogService) { 
                this.isPrivateArr.push("true");
                this.isPrivateArr.push("false");
              }

  ngOnInit() {
    this.stringForAddOp = "Add Data";
    if (this.activatedRoute.snapshot.params.id!=null && this.activatedRoute.snapshot.params.id!==""){
      this.idFrom = this.activatedRoute.snapshot.params.id;
      let observable = this.myDataService.GetMyDataById(this.idFrom);
      observable.subscribe(returnedMyData=>{
        this.myData=returnedMyData;
        this.isPrivate=returnedMyData.isPrivate+"";
        this.textAmount=returnedMyData.amount+"";
        this.dateToShow = new Date(returnedMyData.date);
        this.stringForAddOp = "Update Data";
        this.logger.debug("GetMyDataById: ", returnedMyData);
      }, error => {
        alert ("GetMyDataByIdError: " + error.message);
        this.logger.error("GetMyDataByIdError: ", error.message);
      });
    }
  }

  public stringForAddOp="";
  public AddData(){
    this.myData.date = this.dateToShow;
    this.myData.amount = Number (this.textAmount);
    this.myData.isPrivate=Boolean(JSON.parse(this.isPrivate.toLowerCase()));

    if (this.idFrom===""){
      this.myDataService.AddMyData(this.myData);
    } else {
      this.myDataService.UpdateMyData(this.myData);
    }
  }

  public DeleteData(){
    this.myDataService.DeleteMyData(this.myData);
  }

  
}

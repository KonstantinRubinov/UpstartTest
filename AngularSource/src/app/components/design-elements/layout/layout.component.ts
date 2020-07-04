import { Component, OnInit } from '@angular/core';
import { MyDataService } from 'src/app/services/my-data.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private myDataService:MyDataService) { }

  ngOnInit() {
    this.myDataService.GetMyDataTable();
  }

}

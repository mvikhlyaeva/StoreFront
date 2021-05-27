import { Component, OnInit } from '@angular/core';
import { StoreDepartmentData } from 'trialValues';
import {StoreDepartment} from 'tables/StoreDepartment'
import {SchemeType} from 'dataTypes/ShemeType'

@Component({
  selector: 'app-store-depatments',
  templateUrl: './store-depatments.component.html',
  styleUrls: ['./store-depatments.component.css']
})
export class StoreDepatmentsComponent implements OnInit {

  storeDepartments = StoreDepartmentData;
  SchemeTypeStr: string[];
//   SchemeTypeStr = SchemeType[this.storeDepartments[0].Scheme];
  constructor() { }

  ngOnInit(): void {
    // this.SchemeTypeStr=this.getScheme();
  }

  getScheme(sd: StoreDepartment): string{
      return SchemeType[sd.Scheme];
  }

}

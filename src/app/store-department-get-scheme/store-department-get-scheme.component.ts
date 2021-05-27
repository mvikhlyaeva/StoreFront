import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { SchemeType } from 'dataTypes/ShemeType';
import { StoreDepartmentData } from 'trialValues';
import { StoreDepartment } from 'tables/StoreDepartment';

@Component({
  selector: 'app-store-department-get-scheme',
  templateUrl: './store-department-get-scheme.component.html',
  styleUrls: ['./store-department-get-scheme.component.css']
})
export class StoreDepartmentGetSchemeComponent implements OnInit {

    scheme: string;
    storeId: Number;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
      this.scheme = this.getScheme();
      this.storeId = this.getStoreId();
  }
  getStoreId(): Number{
    return Number(this.route.snapshot.paramMap.get('storeId'));
  }

  getScheme(): string{
    const storeId = Number(this.route.snapshot.paramMap.get('storeId'));
    const departmentId = Number(this.route.snapshot.paramMap.get('departmentId'));
    const SD = StoreDepartmentData.find(item => item.StoreId==storeId && item.DepartmentId == departmentId) as StoreDepartment;
    return SchemeType[SD.Scheme];
     //return SchemeType[Scheme];
}

}

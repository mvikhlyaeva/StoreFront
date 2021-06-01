import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { SchemeType } from 'dataTypes/ShemeType';
import { StoreDepartmentData } from 'trialValues';
import { StoreDepartment } from 'tables/StoreDepartment';

import { GetSchemeService } from '../get-scheme.service'
import { FormsModule } from '@angular/forms';
// import { NgModule } from '@angular/core';

@Component({
  selector: 'app-store-department-get-scheme',
  templateUrl: './store-department-get-scheme.component.html',
  styleUrls: ['./store-department-get-scheme.component.css']
})
export class StoreDepartmentGetSchemeComponent implements OnInit {

    // scheme: string;
    storeId: number;
    departmentId: number;
    result: StoreDepartment
    done: boolean = false
   
    //providers: [GetSchemeService]
     
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private httpService: GetSchemeService,
  ) { }

//   submit(storeId: number, departmentId: number ) {
//       this.httpService
//         .getScheme( storeId, departmentId)
//         .subscribe((data: StoreDepartment) => {
//           this.result = data
//           this.done = true
//         })
//     }

  ngOnInit(): void {
      //this.scheme = this.getScheme();
      //this.storeId = this.getStoreId();
  }


//   getStoreId(): Number{
//     return Number(this.route.snapshot.paramMap.get('storeId'));
//   }

//   getScheme(): string{
//     const storeId = Number(this.route.snapshot.paramMap.get('storeId'));
//     const departmentId = Number(this.route.snapshot.paramMap.get('departmentId'));
//     const SD = StoreDepartmentData.find(item => item.StoreId==storeId && item.DepartmentId == departmentId) as StoreDepartment;
//     return SchemeType[SD.Scheme];
//      //return SchemeType[Scheme];
// }

}

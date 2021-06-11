import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { SchemeType } from 'dataTypes/ShemeType';
import { StoreDepartment } from 'tables/StoreDepartment';

import { StoreDepartmentGetService } from '../Services/store-department-get.service'
import {AlertErrorService } from '../../alert/services/alert-error.service'


@Component({
  selector: 'app-store-department-get-scheme',
  templateUrl: './store-department-get-scheme.component.html',
  styleUrls: ['./store-department-get-scheme.component.css']
})
export class StoreDepartmentGetSchemeComponent implements OnInit {

    scheme: string;
    storeId: number;
    departmentId: number;
    result: StoreDepartment
    done: boolean = false
    error:any;

    providers: [StoreDepartmentGetService]
     
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private getSchemeService: StoreDepartmentGetService,
    private alertErrorService: AlertErrorService 
  ) { }

  ngOnInit(): void {
      this.getStoreDepatment()
  }

  getStoreDepatment(){
    this.storeId = Number(this.route.snapshot.paramMap.get('storeId'));
    this.departmentId = Number(this.route.snapshot.paramMap.get('departmentId'));
    this.getSchemeService
            .getScheme( this.storeId, this.departmentId)
            .subscribe((data) => {
              this.result = data
              this.scheme = SchemeType[this.result.scheme]
              this.done = true
            })

  }

}

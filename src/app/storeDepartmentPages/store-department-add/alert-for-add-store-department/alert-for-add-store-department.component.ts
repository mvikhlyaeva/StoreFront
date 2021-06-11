import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SchemeType } from 'dataTypes/ShemeType';
import { StoreDepartment } from 'tables/StoreDepartment';

@Component({
  selector: 'app-alert-for-add-store-department',
  templateUrl: './alert-for-add-store-department.component.html',
  styleUrls: ['./alert-for-add-store-department.component.css']
})
export class AlertForAddStoreDepartmentComponent implements OnInit {

    @Input() storeDepartment: StoreDepartment;

    @Output() okButtonClick = new EventEmitter();

    scheme: string;

  constructor() { }

  ngOnInit(): void {
    this.scheme = SchemeType[this.storeDepartment.scheme]
  }

  okClick(){
      this.okButtonClick.emit();
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StoreDepartment } from 'tables/StoreDepartment';

@Component({
  selector: 'app-store-department-card',
  templateUrl: './store-department-card.component.html',
  styleUrls: ['./store-department-card.component.css']
})


export class StoreDepartmentCardComponent implements OnInit {

    @Input() sd: StoreDepartment

    @Output() onDeleteClick: EventEmitter<StoreDepartment> = new EventEmitter();
    
  constructor() { }

  ngOnInit(): void {
  }

    GetId(sd){
        this.onDeleteClick.emit(sd);
    }
}

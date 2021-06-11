import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent implements OnInit {

    @Input() storeId: number;
    @Input() departmentId: number;

    @Output() clickDelete = new EventEmitter();

  constructor(
    
  ) { }

  ngOnInit(): void {
  }

  public DeleteStoreDepartmentChild(){
      console.log(this.storeId);
    this.clickDelete.emit();
  }

}

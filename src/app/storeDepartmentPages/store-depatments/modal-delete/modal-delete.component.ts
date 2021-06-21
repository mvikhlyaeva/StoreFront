import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-modal-delete',
    templateUrl: './modal-delete.component.html',
    styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent implements OnInit {

    @Input() component: string;

    @Output() clickDelete = new EventEmitter();

    constructor(

    ) { }

    ngOnInit(): void {
    }

    public DeleteStoreDepartmentChild() {
        this.clickDelete.emit();
    }

}

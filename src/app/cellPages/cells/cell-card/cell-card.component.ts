import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CellType } from 'dataTypes/CellType';
import { Cell } from 'tables/Cell';

@Component({
    selector: 'app-cell-card',
    templateUrl: './cell-card.component.html',
    styleUrls: ['./cell-card.component.css']
})
export class CellCardComponent implements OnInit {

    @Input() cell: Cell;

    @Output() onDeleteClick: EventEmitter<Cell> = new EventEmitter();

    cellType: string;

    constructor() { }

    ngOnInit(): void {
        this.cellType = CellType[this.cell.type];
    }

    GetCell(cell){
        console.log(cell);
        this.onDeleteClick.emit(cell);
    }
}

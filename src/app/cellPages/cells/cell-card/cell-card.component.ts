import { Component, Input, OnInit } from '@angular/core';
import { CellType } from 'dataTypes/CellType';
import { Cell } from 'tables/Cell';

@Component({
  selector: 'app-cell-card',
  templateUrl: './cell-card.component.html',
  styleUrls: ['./cell-card.component.css']
})
export class CellCardComponent implements OnInit {

    @Input() cell: Cell;

    cellType: string;

  constructor() { }

  ngOnInit(): void {
      this.cellType = CellType[this.cell.type];
      console.log(this.cellType);
  }

}

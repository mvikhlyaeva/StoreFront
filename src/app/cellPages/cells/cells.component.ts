import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cell } from 'tables/Cell';
import { CellService } from '../services/cell.service';

@Component({
    selector: 'app-cells',
    templateUrl: './cells.component.html',
    styleUrls: ['./cells.component.css']
})
export class CellsComponent implements OnInit {

    cells: Cell[];
    standId: number;
    done: boolean = false;
    itemForDelete: Cell;

    constructor(
        private route: ActivatedRoute,
        private cellService: CellService,

    ) { }

    ngOnInit(): void {
        this.getStandId();
        this.getCells();

    }

    getStandId() {
        this.standId = Number(this.route.snapshot.paramMap.get('standId'));

    }

    getCells() {
        this.cellService.getCells(this.standId)
            .subscribe((data) => {
                this.cells = data
                this.done = true
                console.log(this.cells);
            })

    }

    getCellForDelete(cell: Cell){
        this.itemForDelete = cell;
    }

    deleteCell(){
        this.cellService.deleteCell(this.itemForDelete.id)
        .subscribe(() => {
            this.getCells();
        })
    document.getElementById("close").click();
    }


}

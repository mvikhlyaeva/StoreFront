import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cell } from 'tables/Cell';
import { CellService } from '../services/cell.service';
//import { ActivatedRoute } from '@angular/router';
//import { Location } from '@angular/common';

@Component({
  selector: 'app-cells',
  templateUrl: './cells.component.html',
  styleUrls: ['./cells.component.css']
})
export class CellsComponent implements OnInit {

    cells: Cell[];
    standId: number;
    done: boolean=false;

  constructor(
      //private location: Location,
    private route: ActivatedRoute, 
    private cellService: CellService,
     
  ) { }

  ngOnInit(): void {
      this.getStandId();
      this.getCells();

  }

  getStandId(){
    this.standId = Number(this.route.snapshot.paramMap.get('standId'));
    
  }

  getCells(){
    this.cellService.getStands(this.standId)
    .subscribe((data) => {
        this.cells = data
        this.done = true
        console.log(this.cells); 
      })  
    
  }

  

}

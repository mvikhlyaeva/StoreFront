import { Component, OnInit } from '@angular/core';
import { Stand } from 'tables/Stand';
import { GetStandsService } from '../services/get-stands.service';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-stands',
  templateUrl: './stands.component.html',
  styleUrls: ['./stands.component.css']
})
export class StandsComponent implements OnInit {

    storeId: number;
    departmentId: number;
    stands: Stand[];
    done: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
      private getStandsService: GetStandsService,
  ) { }

  ngOnInit(): void {
      this.getId();
      this.getStands();
  }

  getId(){
    this.storeId = Number(this.route.snapshot.paramMap.get('storeId'));
    this.departmentId = Number(this.route.snapshot.paramMap.get('departmentId'));
  }

  getStands(){
    this.getStandsService.getStands(this.storeId, this.departmentId)
    .subscribe((data) => {
        this.stands = data
        this.done = true
      })   
  }

}

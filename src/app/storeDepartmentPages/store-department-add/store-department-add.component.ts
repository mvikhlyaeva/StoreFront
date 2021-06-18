import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreDepartment } from 'tables/StoreDepartment';
import {AddStoreDepartmentService} from '../Services/add-store-department.service'

@Component({
  selector: 'app-store-department-add',
  templateUrl: './store-department-add.component.html',
  styleUrls: ['./store-department-add.component.css']
})
export class StoreDepartmentAddComponent implements OnInit {

    storeDepartment: StoreDepartment;
    scheme: string;
    done: boolean = false;
    newSD: StoreDepartment;

  constructor(
    private router: Router,
    private addStoreDepartmentService: AddStoreDepartmentService
  ) { }

  ngOnInit(): void {
      this.newSD = new StoreDepartment();
  }

  AddStoreDepartment(){
      this.newSD.scheme = Number((<HTMLInputElement>document.getElementById('scheme')).value);

      this.addStoreDepartmentService.addStoreDepartment(this.newSD)
      .subscribe((data) => {
        this.storeDepartment = data
        this.done = true
      }, error =>{
          console.error(error);
      })      
  }

  goToApp(){
    this.router.navigate(['app']);
}

}

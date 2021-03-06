import { Component, OnInit } from '@angular/core';
import { StoreDepartment } from 'tables/StoreDepartment'
import { GetAllStoreDepartmentService } from '../Services/get-all-store-department.service'
import { DeleteStoreDepartmentService } from '../Services/delete-store-department.service'

@Component({
    selector: 'app-store-depatments',
    templateUrl: './store-depatments.component.html',
    styleUrls: ['./store-depatments.component.css']
})
export class StoreDepatmentsComponent implements OnInit {

    storeDepartments: StoreDepartment[];
    done: boolean = false
    storeId: number;
    departmentId: number;
    error: any;
    itemForDelete: StoreDepartment;

    constructor(
        private getAllStoreDepartmentService: GetAllStoreDepartmentService,
        private deleteStoreDepartmentService: DeleteStoreDepartmentService,
    ) { }

    ngOnInit(): void {
        this.getSD();
    }

    getSD() {
        this.getAllStoreDepartmentService
            .getStoreDepartments()
            .subscribe((data) => {
                this.storeDepartments = data
                this.done = true
            })
    }

    deleteDepartment(sd: StoreDepartment) {
        this.itemForDelete = sd;
    }

    deleteStoreDepartment() {
        this.deleteStoreDepartmentService
            .DelStoreDepartment(this.itemForDelete.storeId, this.itemForDelete.departmentId)
            .subscribe((data) => {
                this.getSD();
            })
        document.getElementById("close").click();

    }

}

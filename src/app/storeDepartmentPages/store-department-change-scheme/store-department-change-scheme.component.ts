import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { ChangeSchemeStoreDepartmentService } from '../Services/change-scheme-store-department.service'
import { SchemeType } from 'dataTypes/ShemeType';
import { Router } from '@angular/router';

@Component({
    selector: 'app-store-department-change-scheme',
    templateUrl: './store-department-change-scheme.component.html',
    styleUrls: ['./store-department-change-scheme.component.css']
})
export class StoreDepartmentChangeSchemeComponent implements OnInit {

    storeId: number;
    departmentId: number;
    scheme: SchemeType;
    done: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private changeSchemeStoreDepartmentService: ChangeSchemeStoreDepartmentService,
    ) { }

    ngOnInit(): void {
        this.storeId = Number(this.route.snapshot.paramMap.get('storeId'));
        this.departmentId = Number(this.route.snapshot.paramMap.get('departmentId'));
    }

    ChangeScheme() {
        var scheme = Number((<HTMLInputElement>document.getElementById('selectScheme')).value);
        this.changeSchemeStoreDepartmentService
            .ChangeSchemeStoreDepartment(this.storeId, this.departmentId, scheme)
            .subscribe((data) => {
                this.scheme = data
                this.done = true
                console.log(data)
                const alertDisp = document.querySelector('.alertDisp');
                alertDisp.classList.remove('d-none');
                const mess = document.querySelector('.mess');
                var shemeString = SchemeType[this.scheme]
                mess.innerHTML = 'New scheme:' + shemeString;
            })
    }

    goToApp() {
        this.router.navigate(['app']);
    }

}

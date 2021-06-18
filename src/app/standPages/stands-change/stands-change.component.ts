import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetStandsService } from '../services/get-stands.service';
import { Stand } from 'tables/Stand';
import { StandsChangeService } from './services/stands-change.service';

@Component({
    selector: 'app-stands-change',
    templateUrl: './stands-change.component.html',
    styleUrls: ['./stands-change.component.css']
})
export class StandsChangeComponent implements OnInit {

    storeId: number;
    departmentId: number;
    stands: Stand[];
    done: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private getStandsService: GetStandsService,
        private standsChangeService: StandsChangeService
    ) { }

    ngOnInit(): void {
        this.getId();
        this.getStands();
    }

    getId() {
        this.storeId = Number(this.route.snapshot.paramMap.get('storeId'));
        this.departmentId = Number(this.route.snapshot.paramMap.get('departmentId'));
    }

    getStands() {
        this.getStandsService.getStands(this.storeId, this.departmentId)
            .subscribe((data) => {
                this.stands = data
                this.done = true
                console.log(this.stands);
            })

    }

    submit() {
        console.log("submit: ", this.stands);
        this.standsChangeService.changeStands(this.storeId, this.departmentId, this.stands)
            .subscribe((data) => {
                this.router.navigate(['stands/store/' + this.storeId + '/department/' + this.departmentId]);
            })
    }

    addInput() {
        let st = new Stand();
        this.stands.push(st);
    }

    RemoveInput(stand: Stand) {
        console.log('Stand in Remove: ', stand);
        this.stands = this.stands.filter(item => item != stand);
    }

}

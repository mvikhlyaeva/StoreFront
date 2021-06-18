import { Component, Input, OnInit } from '@angular/core';
import { Stand } from 'tables/Stand';

@Component({
    selector: 'app-stand-card',
    templateUrl: './stand-card.component.html',
    styleUrls: ['./stand-card.component.css']
})
export class StandCardComponent implements OnInit {

    @Input() stand: Stand;

    constructor() { }

    ngOnInit(): void {
    }

}

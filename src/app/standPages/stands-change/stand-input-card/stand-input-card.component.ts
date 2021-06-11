import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Stand } from 'tables/Stand';

@Component({
  selector: 'app-stand-input-card',
  templateUrl: './stand-input-card.component.html',
  styleUrls: ['./stand-input-card.component.css']
})
export class StandInputCardComponent implements OnInit {

    @Input() stand: Stand;

    @Output() onDeleteInputCard: EventEmitter<Stand> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  removeStand(stand){
    this.onDeleteInputCard.emit(stand);
  }

}

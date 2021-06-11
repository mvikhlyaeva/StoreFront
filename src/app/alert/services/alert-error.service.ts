import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, of, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertErrorService {

    @Output() event_callback: EventEmitter<any> = new EventEmitter();

    private eventCallback = new Subject<string>(); // Source
    eventCallback$ = this.eventCallback.asObservable(); // Stream
    mess: string = "My message"

    constructor() {
      }

  retMess(mess){
    this.eventCallback.next(mess);
  }

}

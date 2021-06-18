import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ParamInterceptor } from './api.interceptor';
import { AlertErrorService } from './alert/services/alert-error.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    title = 'StoreFront';

    errorMessages: string[] = [];

    constructor(private alertErrorService: AlertErrorService) {
        this.alertErrorService.eventCallback$.subscribe(value => {
            console.log(value);
            this.errorMessages.push(value);
        });
    }

}

import { Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AlertErrorService } from './alert/services/alert-error.service';

@Injectable()
export class ParamInterceptor implements HttpInterceptor {

    constructor(private alertErrorService: AlertErrorService){}

    message: string;
    done: boolean = false;
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
    .pipe(catchError((error: any) => {
        console.log('this log');
        if (error instanceof HttpErrorResponse) {
            switch(error.status){
                case 400:
                    this.message = error.error.Message;
                    break;
                case 404:
                    this.message = "The requested resource was not found."
                    break;
                case 405:
                    this.message = "The requested method is not supported for the specified resource."
                        break;
                case 500:
                case 503:
                case 504:
                    this.message = "The server is temporarily unavailable. Please try again later."
                        break;
                default:
                    this.message = error.message
              }
                this.done = true; 
                this.alertErrorService.retMess(this.message);            
        }
      return new Observable<HttpEvent<any>>();

    }));
    }
}
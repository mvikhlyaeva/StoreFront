import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Stand } from 'tables/Stand';
import { AlertErrorService } from '../../alert/services/alert-error.service';

@Injectable({
  providedIn: 'root'
})
export class GetStandsService {

    constructor(private http: HttpClient) {}

    getStands(storeId:number, departmentId:number): Observable<Stand[]> {

    const params = new HttpParams()
        .set('storeId',  ''+storeId+'')
        .set('departmentId',  ''+departmentId+'');

    return this.http.get<Stand[]>('api/stands', {params})
     }
}

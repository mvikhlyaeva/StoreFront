import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stand } from 'tables/Stand';

@Injectable({
    providedIn: 'root'
})
export class StandsChangeService {

    constructor(private http: HttpClient) { }

    changeStands(storeId: number, departmentId: number, stands: Stand[]): Observable<Stand[]> {

        const params = new HttpParams()
            .set('storeId', '' + storeId + '')
            .set('departmentId', '' + departmentId + '');

        return this.http.post<Stand[]>('api/stands', stands, { params })
    }
}

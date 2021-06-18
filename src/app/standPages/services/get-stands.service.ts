import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stand } from 'tables/Stand';
@Injectable({
    providedIn: 'root'
})
export class GetStandsService {

    constructor(private http: HttpClient) { }

    getStands(storeId: number, departmentId: number): Observable<Stand[]> {

        const params = new HttpParams()
            .set('storeId', '' + storeId + '')
            .set('departmentId', '' + departmentId + '');

        return this.http.get<Stand[]>('api/stands', { params })
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoreDepartment } from 'tables/StoreDepartment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StoreDepartmentGetService {


    constructor(private http: HttpClient) { }

    getScheme(storeId: number, departmentId: number): Observable<StoreDepartment> {
        return this.http.get<StoreDepartment>('api/store/' + storeId + '/department/' + departmentId)
    }

}

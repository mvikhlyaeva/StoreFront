import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoreDepartment } from 'tables/StoreDepartment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GetAllStoreDepartmentService {

    constructor(private http: HttpClient) { }

    getStoreDepartments(): Observable<StoreDepartment[]> {
        return this.http.get<StoreDepartment[]>('api')
    }
}

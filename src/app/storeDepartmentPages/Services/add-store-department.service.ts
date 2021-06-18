import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreDepartment } from 'tables/StoreDepartment';

@Injectable({
  providedIn: 'root'
})
export class AddStoreDepartmentService {

    constructor(private http: HttpClient) {}

    addStoreDepartment(sd: StoreDepartment): Observable<StoreDepartment> {
            return this.http.post<StoreDepartment>('api/storeDepartments', sd)
          }
}

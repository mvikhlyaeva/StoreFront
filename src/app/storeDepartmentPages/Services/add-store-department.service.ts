import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StoreDepartment } from 'tables/StoreDepartment';
import { AlertErrorService } from '../../alert/services/alert-error.service';

@Injectable({
  providedIn: 'root'
})
export class AddStoreDepartmentService {

    constructor(private http: HttpClient) {}

    addStoreDepartment(sd: StoreDepartment): Observable<StoreDepartment> {
            return this.http.post<StoreDepartment>('api/storeDepartments', sd)
          }
}

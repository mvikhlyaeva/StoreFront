import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StoreDepartment } from 'tables/StoreDepartment';
import { Observable } from 'rxjs';
import {AlertErrorService } from '../../alert/services/alert-error.service'
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetAllStoreDepartmentService {

    constructor(private http: HttpClient) {}

    getStoreDepartments(): Observable<StoreDepartment[]> {
            return this.http.get<StoreDepartment[]>('api')
          }
}

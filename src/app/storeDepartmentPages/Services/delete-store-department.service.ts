import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StoreDepartment } from 'tables/StoreDepartment';
import { Observable } from 'rxjs';
import {AlertErrorService } from '../../alert/services/alert-error.service'
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeleteStoreDepartmentService {

  constructor(private http: HttpClient) {}

  DelStoreDepartment(storeId: number, departmentId: number):Observable<StoreDepartment>{
      return this.http.delete<StoreDepartment>('api/store/'+storeId+ '/department/'+ departmentId)
  }

}

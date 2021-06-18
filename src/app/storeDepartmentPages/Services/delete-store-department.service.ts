import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoreDepartment } from 'tables/StoreDepartment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DeleteStoreDepartmentService {

  constructor(private http: HttpClient) {}

  DelStoreDepartment(storeId: number, departmentId: number):Observable<StoreDepartment>{
      return this.http.delete<StoreDepartment>('api/store/'+storeId+ '/department/'+ departmentId)
  }

}

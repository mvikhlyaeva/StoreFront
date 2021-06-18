import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SchemeType } from 'dataTypes/ShemeType';
import { Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeSchemeStoreDepartmentService {

    constructor(private http: HttpClient) {}

    ChangeSchemeStoreDepartment(storeId: number, departmentId: number, scheme:SchemeType): Observable<SchemeType>{
        return this.http.patch<SchemeType>('api/store/'+storeId+ '/department/'+ departmentId, scheme)
    }
}

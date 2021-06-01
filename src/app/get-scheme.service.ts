import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class GetSchemeService {

    constructor(private http: HttpClient) {}
  
    //http://localhost:60489/Home/GetFactorial?number=  ASP.NET MVC
    //http://localhost:8080/angular/getFactorial.php?number=    PHP
    getScheme(storeId: number, departmentId: number) {
      return this.http.get(
        'http://localhost:44385/api/store/'+storeId+ '/department/'+ departmentId
      )
    }
}

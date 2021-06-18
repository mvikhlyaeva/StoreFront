import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cell } from 'tables/Cell';

@Injectable({
    providedIn: 'root'
})
export class CellService {

    constructor(private http: HttpClient) { }

    getStands(standId: number): Observable<Cell[]> {

        const params = new HttpParams()
            .set('standId', '' + standId + '')

        return this.http.get<Cell[]>('api/cells', { params })
    }
}

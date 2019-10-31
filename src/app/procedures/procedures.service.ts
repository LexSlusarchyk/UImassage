import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Procedure } from './procedure';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProceduresService {

  private apiUrl = '/api/procedures';
  private apiAdminUrl = '/api/admin/procedures';

  constructor(private http: HttpClient) { }

  private proceduresUpdated = new Subject<boolean>();
  proceduresUpdated$ = this.proceduresUpdated.asObservable();

  getProcedure(id): any {
    return this.http.get<Procedure>(this.apiUrl + '/' + id).toPromise();
  }

  getProcedures(): any {
    return this.http.get<Procedure[]>(this.apiUrl).toPromise();
  }

  getProceduresByCategoryId(id): any {
    return this.http.get<Procedure[]>(this.apiUrl + '/category/' + id).toPromise();
  }

  addProcedure(procedure): any {
    return this.http.post(this.apiAdminUrl + '/add', procedure).subscribe((res) => {
      this.proceduresUpdated.next();
      return res;
    });
  }

  updateProcedure(procedure): any {
    return this.http.put(this.apiAdminUrl + '/update/' + procedure.id, procedure).subscribe((res) => {
      this.proceduresUpdated.next();
      return res;
    });
  }

  deleteProcedure(id) {
    this.http.delete(this.apiAdminUrl + '/delete/' + id).subscribe(
      (res) => {
        this.proceduresUpdated.next();
        return res;
      }
    );
  }
}


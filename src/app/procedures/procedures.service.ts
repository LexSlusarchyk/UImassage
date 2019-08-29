import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Procedure } from './procedure';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProceduresService {

  private proceduresUrl = '/api/procedures';
  private procedureUrl = '/api/procedure';

  constructor(private http: HttpClient) { }

  private proceduresUpdated = new Subject<boolean>();
  proceduresUpdated$ = this.proceduresUpdated.asObservable();

  getProcedure(id): any {
    return this.http.get<Procedure[]>(this.procedureUrl + id).toPromise();
  }

  getProcedures(): any {
    return this.http.get<Procedure[]>(this.proceduresUrl).toPromise();
  }

  addProcedure(procedure): any {
    return this.http.post('/api/procedures/add', procedure).subscribe((res) => {
      this.proceduresUpdated.next();
      return res;
    });
  }

  updateProcedure(procedure): any {
    return this.http.put('/api/procedures/update/' + procedure.id, procedure).subscribe((res) => {
      this.proceduresUpdated.next();
      return res;
    });
  }

  deleteProcedure(id) {
    this.http.delete('/api/procedure/delete/' + id).subscribe(
      (res) => {
        this.proceduresUpdated.next();
        return res;
      }
    );
  }
}


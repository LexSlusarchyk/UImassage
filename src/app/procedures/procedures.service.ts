  import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProceduresService {

  private apiUrl = environment.apiAddress + '/procedures';
  private apiAdminUrl = environment.apiAddress + '/admin/procedures';

  constructor(private http: HttpClient) { }

  private proceduresUpdated = new Subject<boolean>();
  proceduresUpdated$ = this.proceduresUpdated.asObservable();

  getProcedure(id): any {
    return this.http.get(this.apiUrl + '/' + id).toPromise();
  }

  getProcedures(): any {
    return this.http.get(this.apiUrl).pipe(
      map( res => res )
    );
  }

  getProceduresByCategoryId(id): any {
    return this.http.get(this.apiUrl + '/category/' + id).toPromise();
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


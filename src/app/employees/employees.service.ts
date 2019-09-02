import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {Procedure} from '../procedures/procedure';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private proceduresUrl = '/api/employees';
  private procedureUrl = '/api/employees';

  constructor(private http: HttpClient) { }

  private proceduresUpdated = new Subject<boolean>();
  proceduresUpdated$ = this.proceduresUpdated.asObservable();

  getItem(id): any {
    return this.http.get<Procedure[]>(this.procedureUrl + id).toPromise();
  }

  getItems(): any {
    return this.http.get<Procedure[]>(this.proceduresUrl).toPromise();
  }

  addItem(procedure): any {
    return this.http.post('/api/employees/add', procedure).subscribe((res) => {
      this.proceduresUpdated.next();
      return res;
    });
  }

  updateItem(procedure): any {
    return this.http.put('/api/employees/update/' + procedure.id, procedure).subscribe((res) => {
      this.proceduresUpdated.next();
      return res;
    });
  }

  deleteItem(id) {
    this.http.delete('/api/employees/delete/' + id).subscribe(
      (res) => {
        this.proceduresUpdated.next();
        return res;
      }
    );
  }
}

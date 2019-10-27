import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {Procedure} from '../procedures/procedure';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private apiUrl = '/api/employees';
  private apiAdminUrl = '/api/admin/employees';

  constructor(private http: HttpClient) { }

  private employeesUpdated = new Subject<boolean>();
  employeesUpdated$ = this.employeesUpdated.asObservable();

  getItem(id): any {
    return this.http.get<Procedure[]>(this.apiUrl + '/' + id).toPromise();
  }

  getItems(): any {
    return this.http.get<Procedure[]>(this.apiUrl).toPromise();
  }

  addItem(procedure): any {
    return this.http.post(this.apiAdminUrl + '/add', procedure).subscribe((res) => {
      this.employeesUpdated.next();
      return res;
    });
  }

  updateItem(procedure): any {
    return this.http.put(this.apiAdminUrl + '/update/' + procedure.id, procedure).subscribe((res) => {
      this.employeesUpdated.next();
      return res;
    });
  }

  deleteItem(id) {
    this.http.delete(this.apiAdminUrl + '/delete/' + id).subscribe(
      (res) => {
        this.employeesUpdated.next();
        return res;
      }
    );
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private apiUrl = environment.apiAddress + '/employees';
  private apiAdminUrl = environment.apiAddress + '/admin/employees';

  constructor(private http: HttpClient) { }

  private employeesUpdated = new Subject<boolean>();
  employeesUpdated$ = this.employeesUpdated.asObservable();

  getItem(id): any {
    return this.http.get(this.apiUrl + '/' + id).toPromise();
  }

  getItems(): any {
    return this.http.get(this.apiUrl).pipe(
      map( res => res )
    );
  }

  addItem(item): any {
    return this.http.post(this.apiAdminUrl + '/add', item).subscribe((res) => {
      this.employeesUpdated.next();
      return res;
    });
  }

  updateItem(item): any {
    return this.http.put(this.apiAdminUrl + '/update/' + item.id, item).subscribe((res) => {
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

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {
  private apiUrl = '/api/enrollment';

  constructor(private http: HttpClient) { }

  addRecord(item): any {
    return this.http.post(this.apiUrl + '/add', item).subscribe((res) => {
      return res;
    });
  }

  getItems(): any {
    return this.http.get(this.apiUrl).toPromise();
  }
}
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {
  private apiUrl = environment.apiAddress + '/enrollment';

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

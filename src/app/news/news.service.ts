import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {Procedure} from '../procedures/procedure';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiUrl = '/api/news';

  constructor(private http: HttpClient) { }

  private newsUpdated = new Subject<boolean>();
  newsUpdated$ = this.newsUpdated.asObservable();

  getItem(id): any {
    return this.http.get<Procedure[]>(this.apiUrl + '/' + id).toPromise();
  }

  getItems(): any {
    return this.http.get<Procedure[]>(this.apiUrl).toPromise();
  }

  addItem(item): any {
    return this.http.post(this.apiUrl + '/add', item).subscribe((res) => {
      this.newsUpdated.next();
      return res;
    });
  }

  updateItem(item): any {
    return this.http.put(this.apiUrl + '/update/' + item.id, item).subscribe((res) => {
      this.newsUpdated.next();
      return res;
    });
  }

  deleteItem(id) {
    this.http.delete(this.apiUrl + '/delete/' + id).subscribe(
      (res) => {
        this.newsUpdated.next();
        return res;
      }
    );
  }
}

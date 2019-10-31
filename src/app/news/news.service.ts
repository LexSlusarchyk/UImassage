import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiUrl = '/api/news';
  private apiAdminUrl = '/api/admin/news';

  constructor(private http: HttpClient) { }

  private newsUpdated = new Subject<boolean>();
  newsUpdated$ = this.newsUpdated.asObservable();

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
      this.newsUpdated.next();
      return res;
    });
  }

  updateItem(item): any {
    return this.http.put(this.apiAdminUrl + '/update/' + item.id, item).subscribe((res) => {
      this.newsUpdated.next();
      return res;
    });
  }

  deleteItem(id) {
    this.http.delete(this.apiAdminUrl + '/delete/' + id).subscribe(
      (res) => {
        this.newsUpdated.next();
        return res;
      }
    );
  }
}

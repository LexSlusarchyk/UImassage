import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {Procedure} from '../procedures/procedure';
@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private apiUrl = '/api/gallery';

  constructor(private http: HttpClient) { }

  private galleryUpdated = new Subject<boolean>();
  galleryUpdated$ = this.galleryUpdated.asObservable();

  getItem(id): any {
    return this.http.get<Procedure[]>(this.apiUrl + id).toPromise();
  }

  getItems(): any {
    return this.http.get<Procedure[]>(this.apiUrl).toPromise();
  }

  addItem(item): any {
    return this.http.post(this.apiUrl + '/add', item).subscribe((res) => {
      this.galleryUpdated.next();
      return res;
    });
  }

  updateItem(item): any {
    return this.http.put(this.apiUrl + '/update/' + item.id, item).subscribe((res) => {
      this.galleryUpdated.next();
      return res;
    });
  }

  deleteItem(id) {
    this.http.delete(this.apiUrl + '/delete/' + id).subscribe(
      (res) => {
        this.galleryUpdated.next();
        return res;
      }
    );
  }
}

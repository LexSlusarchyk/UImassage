import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private apiUrl = '/api/categories';

  constructor(private http: HttpClient) { }

  private categoriesUpdated = new Subject<boolean>();
  categoriesUpdated$ = this.categoriesUpdated.asObservable();

  private categoriesTreeReady = new Subject<[]>();
  categoriesTreeReady$ = this.categoriesTreeReady.asObservable();

  private selectedCategory = new Subject<[]>();
  selectedCategory$ = this.selectedCategory.asObservable();

  private categoryChildren = new Subject<[]>();
  categoryChildren$ = this.categoryChildren.asObservable();

  selectCategory(category) {
    this.selectedCategory.next(category);
  }

  getItem(id): any {
    return this.http.get(this.apiUrl + '/' + id).toPromise();
  }

  getItems(): any {
    return this.http.get(this.apiUrl).toPromise();
  }

  getCategoriesTree(): any {
    this.http.get(this.apiUrl).subscribe((res) => {
      this.categoriesTreeReady.next(this.createTree(res));
    });
  }

  getCategoryChildren(id) {
    return this.http.get(this.apiUrl + '/children/' + id).toPromise();
  }

  createTree(categories) {
    return this.unflatten(categories);
  }

  unflatten( array, parent?, tree? ) {

    tree = typeof tree !== 'undefined' ? tree : [];
    parent = typeof parent !== 'undefined' ? parent : { id: 0 };

    let children = array.filter( function(child) {
      return +child.parent_id === +parent.id;
    });

    if ( children.length ) {
      if ( +parent.id === 0 ) {
        tree = children;
      } else {
        parent['children'] = children;
      }

      for (let i = 0; i < children.length; i++) {
        this.unflatten( array, children[i] );
      }
    }

    return tree;
  }

  addItem(item): any {
    return this.http.post(this.apiUrl + '/add', item).subscribe((res) => {
      this.categoriesUpdated.next();
      return res;
    });
  }

  updateItem(item): any {
    return this.http.put(this.apiUrl + '/update/' + item.id, item).subscribe((res) => {
      this.categoriesUpdated.next();
      return res;
    });
  }

  deleteItem(id) {
    this.http.delete(this.apiUrl + '/delete/' + id).subscribe(
      (res) => {
        this.categoriesUpdated.next();
        return res;
      }
    );
  }
}
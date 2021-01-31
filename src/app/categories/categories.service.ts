import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {UrlHelperService} from '../helpers/url-helper.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private apiUrl = environment.apiAddress + '/categories';
  private apiAdminUrl = environment.apiAddress + '/admin/categories';

  constructor(private http: HttpClient,
              public urlHelperService: UrlHelperService) { }

  private categoriesUpdated = new Subject<boolean>();
  categoriesUpdated$ = this.categoriesUpdated.asObservable();

  private selectedCategory = new Subject<[]>();
  selectedCategory$ = this.selectedCategory.asObservable();

  selectCategory(category) {
    this.selectedCategory.next(category);
  }

  getItem(id): any {
    return this.http.get(this.apiUrl + '/' + id).toPromise();
  }

  getItems(): any {
    return this.http.get(this.apiUrl).toPromise();
  }

  getFavoriteCategories(): any {
    return this.http.get(this.apiUrl + '/favorite').toPromise();
  }

  mapCategoriesList(list) {
    if (!list.length) { return []; }
    const formatedList = [];

    list.forEach((item) => {
      const thumbnailName = `min${item.image}`;
      item.image = this.urlHelperService.getImageUrl(thumbnailName);
      formatedList.push(item);
    });
    return formatedList;
  }

  getCategoriesTree(): any {
    return this.http.get(this.apiUrl).pipe(
      map(res => this.createTree(res) )
    );
  }

  getAllCategoriesTreeNotNested(): any {
    return this.http.get(this.apiUrl).pipe(
      map(res => this.createTree(res, true) )
    );
  }

  getCategoryChildren(id) {
    return this.http.get(this.apiUrl + '/children/' + id).toPromise();
  }

  createTree(categories, notNested?: boolean) {
    return notNested ? this.unflattenNotNested(categories) : this.unflatten(categories);
  }

  unflatten( array, parent?, tree? ) {

    tree = typeof tree !== 'undefined' ? tree : [];
    parent = typeof parent !== 'undefined' ? parent : { id: 0 };

    const children = array.filter( function(child) {
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

  unflattenNotNested( array, parent?, tree? ) {
    if (!array.length) { return; }
    tree = [];
    parent = array.shift();
    parent.title = 'Всі категорії несортовані';
    parent.children = array;
    tree.push(parent);
    return tree;
  }

  addItem(item): any {
    return this.http.post(this.apiAdminUrl + '/add', item).subscribe((res) => {
      this.categoriesUpdated.next();
      return res;
    });
  }

  updateItem(item): any {
    return this.http.put(this.apiAdminUrl + '/update/' + item.id, item).subscribe((res) => {
      this.categoriesUpdated.next();
      return res;
    });
  }

  deleteItem(id) {
    this.http.delete(this.apiAdminUrl + '/delete/' + id).subscribe(
      (res) => {
        this.categoriesUpdated.next();
        return res;
      }
    );
  }
}

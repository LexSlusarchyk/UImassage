import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Category} from '../../categories/category';
import {CategoriesService} from '../../categories/categories.service';


@Injectable({
  providedIn: 'root'
})
export class ProceduresCategoryResolverService implements Resolve<Category> {

  constructor(private cs: CategoriesService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Category> | Observable<never> {
    let id = route.paramMap.get('id');
    return this.cs.getItem(id);
  }
}

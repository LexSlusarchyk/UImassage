import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Procedure} from './procedure';
import {ProceduresService} from './procedures.service';

@Injectable({
  providedIn: 'root'
})
export class ProcedureDetailsResolverService implements Resolve<Procedure> {

  constructor(private ps: ProceduresService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Procedure> | Observable<never> {
    let id = route.paramMap.get('id');
    return this.ps.getProcedure(id);
  }
}

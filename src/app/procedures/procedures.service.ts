import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Procedure } from './procedure';

@Injectable({
  providedIn: 'root'
})
export class ProceduresService {

  private newsUrl = '/api/procedures';

  constructor(private http: HttpClient) { }

  getProcedures(): any {
    // return this.http.get<Article[]>(this.heroesUrl);
    return this.http.get<Procedure[]>(this.newsUrl).toPromise();
  }
  addProcedure(): any {
    return this.http.post('/api/procedures/add', {id: null, title: 'lex', text: 'the best'}).toPromise();
  }
}


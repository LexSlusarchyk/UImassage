import { Injectable } from '@angular/core';
import { NewsList } from './news/news-list';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Article } from './news/article';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  news: [NewsList] = [{'id': 1, title: 'lex', 'text': 'dfgbdfghdgfhdfhgf'}];

  private newsUrl = '/api/news';

  constructor(private http: HttpClient) {
    // this.news = [] this.getNews();

  }

  getNews(): any {
    // return this.http.get<Article[]>(this.heroesUrl);
    this.http.get(this.newsUrl).toPromise()
      .then(function(response: any) {
        console.log(response);
      });
  }


}

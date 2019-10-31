import { Component, OnInit } from '@angular/core';
import {NewsService} from './news.service';
import {LanguageService} from '../helpers/language.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  itemsList = null;

  constructor(private newsService: NewsService,
              private languageService: LanguageService) {

    this.newsService.newsUpdated$.subscribe(() => {
      this.loadItemsList();
    });
  }

  ngOnInit() {
    this.loadItemsList();
  }

  loadItemsList() {
    this.newsService.getItems().subscribe((response) => {
      this.itemsList = this.languageService.translateItems(response);
    });
  }

}

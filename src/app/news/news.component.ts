import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {NewsService} from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  itemsList = null;

  constructor(private newsService: NewsService,
              public dialog: MatDialog) {

    this.newsService.newsUpdated$.subscribe(() => {
      this.loadItemsList();
    });
  }

  ngOnInit() {
    this.loadItemsList();
  }

  loadItemsList() {
    this.newsService.getItems().then((response) => {
      this.itemsList = response;
    });
  }

}

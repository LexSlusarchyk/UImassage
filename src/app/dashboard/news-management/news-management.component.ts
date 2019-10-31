import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {NewsService} from '../../news/news.service';

@Component({
  selector: 'app-news-management',
  templateUrl: './news-management.component.html',
  styleUrls: ['./news-management.component.scss']
})
export class NewsManagementComponent implements OnInit {
  itemsList = null;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.loadItemsList();
  }

  loadItemsList() {
    this.newsService.getItems().subscribe((response) => {
      this.itemsList = response;
    });
  }
}

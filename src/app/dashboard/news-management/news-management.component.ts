import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CreateArticleModalComponent} from '../modals/create-article-modal/create-article-modal.component';

@Component({
  selector: 'app-news-management',
  templateUrl: './news-management.component.html',
  styleUrls: ['./news-management.component.scss']
})
export class NewsManagementComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  addArticle() {
    this.showCreateModal();
  }

  showCreateModal() {
    const dialogRef = this.dialog.open(CreateArticleModalComponent, {
      width: '900px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

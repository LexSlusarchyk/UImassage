import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../../categories/categories.service';

@Component({
  selector: 'app-procedures-category-list',
  templateUrl: './procedures-category-list.component.html',
  styleUrls: ['./procedures-category-list.component.scss']
})
export class ProceduresCategoryListComponent implements OnInit {
  items = null;
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.loadItemsList();
  }

  loadItemsList() {
    this.categoriesService.getItems().then((response) => {
      this.items = response;
    });
  }
}

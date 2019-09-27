import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../categories/categories.service';
import {UrlHelperService} from '../helpers/url-helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categoryList: [];
  constructor(private categoriesService: CategoriesService,
              private urlHelperService: UrlHelperService) {}

  ngOnInit() {
    this.loadItemsList();
  }

  loadItemsList() {
    this.categoriesService.getItems().then((response) => {
      this.categoryList = response;
    });
  }
}

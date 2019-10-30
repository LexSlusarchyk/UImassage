import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../categories/categories.service';

import {SwiperPaginationInterface} from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categoryList: [];

  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true,
    hideOnClick: false
  };

  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: false,
    mousewheel: false,
    scrollbar: false,
    navigation: false,
    pagination: this.pagination,
    autoplay: {
      delay: 3000,
    },
  };


  constructor(private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.loadItemsList();
  }

  loadItemsList() {
    this.categoriesService.getFavoriteCategories().then((response) => {
      this.categoryList = response;
    });
  }
}

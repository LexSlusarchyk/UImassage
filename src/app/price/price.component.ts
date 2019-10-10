import { Component, OnInit } from '@angular/core';
import {ProceduresService} from '../procedures/procedures.service';
import {CategoriesService} from '../categories/categories.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {
  categories;
  children;
  categoriesTree;

  constructor(private proceduresService: ProceduresService,
              private categoriesService: CategoriesService) {

    this.categoriesService.getCategoriesTree();
    this.categoriesService.categoriesTreeReady$.subscribe((categoriesTree: any) => {
      this.categoriesTree = categoriesTree[0].children;
    });
  }

  ngOnInit() {
  }



}

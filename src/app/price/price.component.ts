import { Component, OnInit } from '@angular/core';
import {ProceduresService} from '../procedures/procedures.service';
import {CategoriesService} from '../categories/categories.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent {
  categories;
  children;
  categoriesTree;

  constructor(private proceduresService: ProceduresService,
              private categoriesService: CategoriesService) {
    this.loadCategoriesTree();
  }

  loadCategoriesTree(): void {
    this.categoriesService.getCategoriesTree().subscribe((categoriesTree: any) => {
      this.categoriesTree = categoriesTree[0].children;
    });
  }
}

import {AfterViewInit, Component} from '@angular/core';
import {CategoriesService} from '../../categories/categories.service';

@Component({
  selector: 'app-categories-management',
  templateUrl: './categories-management.component.html',
  styleUrls: ['./categories-management.component.scss']
})
export class CategoriesManagementComponent implements AfterViewInit {
  categoryTree;
  categoryTreeNotNested;
  constructor(private categoriesService: CategoriesService) {
    this.categoriesService.categoriesUpdated$.subscribe(() => {
      this.loadCategoriesTree();
    });
  }

  ngAfterViewInit() {
    this.loadCategoriesTree();
  }

  loadCategoriesTree(): void {
    this.categoriesService.getCategoriesTree().subscribe((categoriesTree: any) => {
      this.categoryTree = categoriesTree;
    });
    this.categoriesService.getAllCategoriesTreeNotNested().subscribe((categoriesTree: any) => {
      this.categoryTreeNotNested = categoriesTree;
    });
  }
}

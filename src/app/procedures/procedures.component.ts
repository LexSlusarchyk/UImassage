import {Component, OnInit} from '@angular/core';
import {ProceduresService} from './procedures.service';
import {CategoriesService} from '../categories/categories.service';
import {LanguageService} from '../helpers/language.service';

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.scss']
})
export class ProceduresComponent implements OnInit {
  categoryTree;
  procedures = null;
  sideNavOpened = true;
  public innerWidth: any;

  constructor(private proceduresService: ProceduresService,
              private categoriesService: CategoriesService,
              private languageService: LanguageService) {

    this.categoriesService.selectedCategory$.subscribe(() => {
      this.onCategorySelected();
    });
  }

  ngOnInit() {
    this.loadProcedures();
    this.loadCategoriesTree();
    this.defineSideNavState();
  }

  onCategorySelected() {
    if (this.innerWidth < 769) {
      this.sideNavOpened = false;
    }
  }

  defineSideNavState() {
    this.innerWidth = window.innerWidth;

    if (this.innerWidth < 769) {
      this.sideNavOpened = false;
    }
  }

  loadCategoriesTree(): void {
    this.categoriesService.getCategoriesTree().subscribe((categoriesTree: any) => {
      this.categoryTree = this.languageService.translateItems(categoriesTree[0].children);
    });
  }

  loadProcedures() {
    this.proceduresService.getProcedures().subscribe((response) => {
      this.procedures = this.languageService.translateItems(response);
    });
  }

  toggleSideNav(): void {
    this.sideNavOpened = !this.sideNavOpened;
  }
}

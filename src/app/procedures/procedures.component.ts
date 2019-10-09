import {Component, OnInit} from '@angular/core';
import {ProceduresService} from './procedures.service';
import {CategoriesService} from '../categories/categories.service';

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.scss']
})
export class ProceduresComponent implements OnInit {
  procedures = null;
  sideNavOpened = true;
  public innerWidth: any;

  constructor(private proceduresService: ProceduresService,
              private categoriesService: CategoriesService,) {

    this.proceduresService.proceduresUpdated$.subscribe(() => {
      this.loadProcedures();
    });

    this.categoriesService.selectedCategory$.subscribe(() => {
      this.onCategorySelected();
    });
  }

  ngOnInit() {
    this.loadProcedures();
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

  loadProcedures() {
    this.proceduresService.getProcedures().then((response) => {
      this.procedures = response;
    });
  }

  toggleSideNav(): void {
    this.sideNavOpened = !this.sideNavOpened;
  }
}

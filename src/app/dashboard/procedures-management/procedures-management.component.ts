import { Component, OnInit } from '@angular/core';
import {ProceduresService} from '../../procedures/procedures.service';
import {FileUploadService} from '../file-uploader/file-upload.service';
import {CategoriesService} from '../../categories/categories.service';

@Component({
  selector: 'app-procedures-management',
  templateUrl: './procedures-management.component.html',
  styleUrls: ['./procedures-management.component.scss']
})
export class ProceduresManagementComponent implements OnInit {
  categoryTree;
  procedures = null;

  constructor(private proceduresService: ProceduresService,
              private fileUploadService: FileUploadService,
              private categoriesService: CategoriesService,
             ) {

    this.proceduresService.proceduresUpdated$.subscribe(() => {
      this.loadProcedures();
    });

    this.categoriesService.selectedCategory$.subscribe((category) => {
      this.onCategorySelected(category);
    });
  }

  ngOnInit() {
    this.loadProcedures();
    this.loadCategoriesTree();
  }

  loadProcedures() {
    this.proceduresService.getProcedures().subscribe((response) => {
      this.procedures = response;
    });
  }

  loadCategoriesTree(): void {
    this.categoriesService.getCategoriesTree().subscribe((categoriesTree: any) => {
      this.categoryTree = categoriesTree;
    });
  }

  onCategorySelected(category) {
    this.proceduresService.getProceduresByCategoryId(category.id).then((response) => {
      this.procedures = response;
    });
  }
}

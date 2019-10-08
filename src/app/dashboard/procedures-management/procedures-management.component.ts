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
  }

  loadProcedures() {
    this.proceduresService.getProcedures().then((response) => {
      this.procedures = response;
    });
  }

  onCategorySelected(category) {
    this.proceduresService.getProceduresByCategoryId(category.id).then((response) => {
      this.procedures = response;
    });
  }
}

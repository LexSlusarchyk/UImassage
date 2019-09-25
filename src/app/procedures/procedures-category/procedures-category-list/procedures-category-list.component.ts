import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../../categories/categories.service';
import {FileUploadService} from '../../../dashboard/file-uploader/file-upload.service';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-procedures-category-list',
  templateUrl: './procedures-category-list.component.html',
  styleUrls: ['./procedures-category-list.component.scss']
})
export class ProceduresCategoryListComponent implements OnInit {
  items = null;
  constructor(private categoriesService: CategoriesService,
              private fileUploadService: FileUploadService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.loadItemsList();
    // this.categoriesService.getCategoryChildren(1);
  }

  loadItemsList() {
    this.categoriesService.getItems().then((response) => {
      this.items = this.mapItemsList(response);
    });
  }

  mapItemsList(list) {
    const procedureList = [];

    list.map((procedure) => {
      if (procedure.image) {
        procedure.image = this.fileUploadService.getFileUrl(procedure.image);
      }
      procedureList.push(procedure);
    });
    return procedureList;
  }

}

import { Component, OnInit } from '@angular/core';
import {FileUploadService} from '../dashboard/file-uploader/file-upload.service';
import {MatDialog} from '@angular/material/dialog';
import {CategoriesService} from './categories.service';
import {CreateCategoryModalComponent} from '../dashboard/modals/create-category-modal/create-category-modal.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  items = null;

  constructor(private categoriesService: CategoriesService,
              private fileUploadService: FileUploadService,
              public dialog: MatDialog) {

    this.categoriesService.categoriesUpdated$.subscribe(() => {
      this.loadItemsList();
    });
  }

  ngOnInit() {
    this.loadItemsList();
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

  editItem(procedure) {
    this.showEditModal(procedure);
  }

  deleteItem(id) {
    this.categoriesService.deleteItem(id);
  }

  showEditModal(procedure) {
    const dialogRef = this.dialog.open(CreateCategoryModalComponent, {
      data: { procedure: procedure },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {FileUploadService} from '../dashboard/file-uploader/file-upload.service';
import {MatDialog} from '@angular/material/dialog';
import {CreateProductModalComponent} from '../dashboard/modals/create-product-modal/create-product-modal.component';
import {GalleryService} from './gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  items = null;

  constructor(private galleryService: GalleryService,
              private fileUploadService: FileUploadService,
              public dialog: MatDialog) {

    this.galleryService.galleryUpdated$.subscribe(() => {
      this.loadItemsList();
    });
  }

  ngOnInit() {
    this.loadItemsList();
  }

  loadItemsList() {
    this.galleryService.getItems().then((response) => {
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
    this.galleryService.deleteItem(id);
  }

  showEditModal(procedure) {
    const dialogRef = this.dialog.open(CreateProductModalComponent, {
      width: '900px',
      data: { procedure: procedure },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

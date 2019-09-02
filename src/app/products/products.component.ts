import { Component, OnInit } from '@angular/core';
import {FileUploadService} from '../dashboard/file-uploader/file-upload.service';
import {MatDialog} from '@angular/material/dialog';
import {CreateProductModalComponent} from '../dashboard/modals/create-product-modal/create-product-modal.component';
import {ProductsService} from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  items = null;

  constructor(private productsService: ProductsService,
              private fileUploadService: FileUploadService,
              public dialog: MatDialog) {

    this.productsService.productsUpdated$.subscribe(() => {
      this.loadItemsList();
    });
  }

  ngOnInit() {
    this.loadItemsList();
  }

  loadItemsList() {
    this.productsService.getItems().then((response) => {
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
    this.productsService.deleteItem(id);
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

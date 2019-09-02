import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EmployeesService} from '../../../employees/employees.service';
import {FileUploadService} from '../../file-uploader/file-upload.service';
import {ProductsService} from '../../../products/products.service';

@Component({
  selector: 'app-create-product-modal',
  templateUrl: './create-product-modal.component.html',
  styleUrls: ['./create-product-modal.component.scss']
})
export class CreateProductModalComponent implements OnInit {

  itemForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    text: new FormControl('')
  });

  fileUrl: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<CreateProductModalComponent>,
              private productsService: ProductsService,
              private fileUploadService: FileUploadService) {
    this.productsService.productsUpdated$.subscribe(() => {
      this.closeModal();
    });
    this.fileUploadService.fileUploaded$.subscribe((res) => {
      this.fileUrl = res;
    });
  }

  ngOnInit() {
    this.setItemFields();
  }

  setItemFields() {
    if (this.isEdited()) {
      this.fileUploadService.setFileUrl(this.data.procedure.image);
      this.itemForm.patchValue({
        title: this.data.procedure.title,
        text: this.data.procedure.text
      });
    }
  }

  confirm() {
    this.isEdited() ? this.editItem() : this.addItem();
  }

  addItem() {
    this.productsService.addItem(this.getItem());
  }

  editItem() {
    this.productsService.updateItem(this.getItem());
  }

  getItem() {
    return {
      id: this.isEdited() ? this.data.procedure.id : null,
      title: this.itemForm.get('title').value,
      text: this.itemForm.get('text').value,
      image: this.fileUrl ? this.fileUrl.split('uploads/')[1] : null
    };
  }

  onNoClick(): void {
    this.closeModal();
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  isEdited(): boolean {
    return this.data && this.data.procedure;
  }

}

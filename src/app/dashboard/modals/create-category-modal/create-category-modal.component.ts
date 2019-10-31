import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CategoriesService} from '../../../categories/categories.service';
import {FileUploadService} from '../../file-uploader/file-upload.service';
import {Category} from '../../../categories/category';

@Component({
  selector: 'app-create-category-modal',
  templateUrl: './create-category-modal.component.html',
  styleUrls: ['./create-category-modal.component.scss']
})
export class CreateCategoryModalComponent implements OnInit {
  category: Category;
  itemForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    titleEn: new FormControl(''),
  });
  fileUrl: string;
  cropperHidden = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<CreateCategoryModalComponent>,
              private categoriesService: CategoriesService,
              private fileUploadService: FileUploadService) {

    this.category = new Category();

    this.categoriesService.categoriesUpdated$.subscribe(() => {
      this.closeModal();
    });
    this.fileUploadService.fileUploaded$.subscribe((res) => {
      this.fileUrl = res;
      this.cropperHidden = true;
    });
  }

  ngOnInit() {
    this.setItemFields();
  }

  setItemFields() {
    if (this.isEdited()) {
      this.fileUploadService.setFileUrl(this.data.category.image);
      this.itemForm.patchValue({
        title: this.data.category.title,
        titleEn: this.data.category.titleEn
      });
      this.category.text = this.data.category.text;
      this.category.textEn = this.data.category.textEn;
    }
  }

  confirm() {
    this.isEdited() ? this.editItem() : this.addItem();
  }

  addItem() {
    this.categoriesService.addItem(this.getItem());
  }

  editItem() {
    this.categoriesService.updateItem(this.getItem());
  }

  getItem() {
    return {
      id: this.isEdited() ? this.data.category.id : null,
      title: this.itemForm.get('title').value,
      titleEn: this.itemForm.get('titleEn').value,
      image: this.fileUrl ? this.fileUrl : null,
      text: this.category.text,
      textEn: this.category.textEn,
      parentId: this.data.parentId ? this.data.parentId : this.data.category.parentId,
    };
  }

  onNoClick(): void {
    this.closeModal();
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  isEdited(): boolean {
    return this.data && this.data.category;
  }

  toggleCropper(): void {
    this.cropperHidden = !this.cropperHidden;
  }
}

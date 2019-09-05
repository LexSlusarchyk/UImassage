import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CategoriesService} from '../../../categories/categories.service';

@Component({
  selector: 'app-create-category-modal',
  templateUrl: './create-category-modal.component.html',
  styleUrls: ['./create-category-modal.component.scss']
})
export class CreateCategoryModalComponent implements OnInit {
  itemForm: FormGroup = new FormGroup({
    title: new FormControl(''),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<CreateCategoryModalComponent>,
              private categoriesService: CategoriesService) {
    this.categoriesService.categoriesUpdated$.subscribe(() => {
      this.closeModal();
    });
  }

  ngOnInit() {
    this.setItemFields();
  }

  setItemFields() {
    if (this.isEdited()) {
      this.itemForm.patchValue({
        title: this.data.category.title,
      });
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

}

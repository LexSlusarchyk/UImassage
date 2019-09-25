import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup} from '@angular/forms';
import {ProceduresService} from '../../../procedures/procedures.service';
import {FileUploadService} from '../../file-uploader/file-upload.service';
import {CategoriesService} from '../../../categories/categories.service';

@Component({
  selector: 'app-create-procedure-modal',
  templateUrl: './create-procedure-modal.component.html',
  styleUrls: ['./create-procedure-modal.component.scss']
})
export class CreateProcedureModalComponent implements OnInit {
  xpandStatus = false;
  procedureForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    text: new FormControl('')
  });

  fileUrl: string;
  selectedCategory: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<CreateProcedureModalComponent>,
              private proceduresService: ProceduresService,
              private fileUploadService: FileUploadService,
              private categoriesService: CategoriesService, ) {
    this.proceduresService.proceduresUpdated$.subscribe(() => {
      this.closeModal();
    });
    this.fileUploadService.fileUploaded$.subscribe((res) => {
      this.fileUrl = res;
    });

    this.categoriesService.selectedCategory$.subscribe((category) => {
      this.selectedCategory = category;
      this.xpandStatus = false;
    });
  }

  ngOnInit() {
    this.setProcedureFields();
  }

  setProcedureFields() {
    if (this.isEdited()) {
      this.fileUploadService.setFileUrl(this.data.procedure.image);
      this.procedureForm.patchValue({
        title: this.data.procedure.title,
        text: this.data.procedure.text
      });
      this.setCategory();
    }
  }

  getCategoryTitle() {
    return this.selectedCategory && this.selectedCategory.title;
  }

  setCategory() {
    this.categoriesService.getItem(this.data.procedure.category_id).then(category => {
      this.selectedCategory = category[0];
    });
  }

  confirm() {
    this.isEdited() ? this.editProcedure() : this.addProcedure();
  }

  addProcedure() {
    this.proceduresService.addProcedure(this.getProcedure());
  }

  editProcedure() {
    this.proceduresService.updateProcedure(this.getProcedure());
  }

  getProcedure() {
    return {
      id: this.isEdited() ? this.data.procedure.id : null,
      title: this.procedureForm.get('title').value,
      text: this.procedureForm.get('text').value,
      image: this.fileUrl ? this.fileUrl : null,
      category_id: this.getCategoryId()
    };
  }

  getCategoryId() {
    return this.selectedCategory && this.selectedCategory.id || this.data && this.data.procedure.category_id || 1;
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

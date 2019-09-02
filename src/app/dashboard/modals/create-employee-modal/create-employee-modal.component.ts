import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FileUploadService} from '../../file-uploader/file-upload.service';
import {EmployeesService} from '../../../employees/employees.service';

@Component({
  selector: 'app-create-employee-modal',
  templateUrl: './create-employee-modal.component.html',
  styleUrls: ['./create-employee-modal.component.scss']
})
export class CreateEmployeeModalComponent implements OnInit {

  procedureForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    text: new FormControl('')
  });

  fileUrl: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<CreateEmployeeModalComponent>,
              private employeesService: EmployeesService,
              private fileUploadService: FileUploadService) {
    this.employeesService.proceduresUpdated$.subscribe(() => {
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
      this.procedureForm.patchValue({
        title: this.data.procedure.title,
        text: this.data.procedure.text
      });
    }
  }

  confirm() {
    this.isEdited() ? this.editItem() : this.addItem();
  }

  addItem() {
    this.employeesService.addItem(this.getItem());
  }

  editItem() {
    this.employeesService.updateItem(this.getItem());
  }

  getItem() {
    return {
      id: this.isEdited() ? this.data.procedure.id : null,
      title: this.procedureForm.get('title').value,
      text: this.procedureForm.get('text').value,
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

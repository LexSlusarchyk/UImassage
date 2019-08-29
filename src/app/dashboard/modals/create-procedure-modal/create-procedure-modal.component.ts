import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup} from '@angular/forms';
import {ProceduresService} from '../../../procedures/procedures.service';
import {FileUploadService} from '../../file-uploader/file-upload.service';

@Component({
  selector: 'app-create-procedure-modal',
  templateUrl: './create-procedure-modal.component.html',
  styleUrls: ['./create-procedure-modal.component.scss']
})
export class CreateProcedureModalComponent implements OnInit {

  procedureForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    text: new FormControl('')
  });

  fileUrl: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<CreateProcedureModalComponent>,
              private proceduresService: ProceduresService,
              private fileUploadService: FileUploadService) {
    this.proceduresService.proceduresUpdated$.subscribe(() => {
      this.closeModal();
    });
    this.fileUploadService.fileUploaded$.subscribe((res) => {
      this.fileUrl = res;
    });
  }

  ngOnInit() {
    this.setProcedureFields();
  }

  setProcedureFields() {
    if (this.isEdited()) {
      debugger;
      this.fileUploadService.setFileUrl(this.data.procedure.image);
      this.procedureForm.patchValue({
        title: this.data.procedure.title,
        text: this.data.procedure.text
      });
    }
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

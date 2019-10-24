import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EnrollService} from '../enroll.service';

@Component({
  selector: 'app-enroll-modal',
  templateUrl: './enroll-modal.component.html',
  styleUrls: ['./enroll-modal.component.scss']
})
export class EnrollModalComponent implements OnInit {
  success = false;

  enrollForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required,
      Validators.minLength(2)]),
    phone: new FormControl('', [Validators.required,
      Validators.maxLength(13)]),
    subject: new FormControl(''),
    message: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<EnrollModalComponent>,
              private enrollService: EnrollService) { }

  ngOnInit() {}

  confirm() {
    if (this.enrollForm.valid) {
      this.enrollService.addRecord(this.enrollForm.value);
      this.success = true;
    }
  }

  onNoClick(): void {
    this.closeModal();
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}

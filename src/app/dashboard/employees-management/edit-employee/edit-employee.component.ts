import { Component, OnInit } from '@angular/core';
import {Procedure} from '../../../procedures/procedure';
import {ActivatedRoute, Router} from '@angular/router';
import {UrlHelperService} from '../../../helpers/url-helper.service';
import {Location} from '@angular/common';
import {FormControl, FormGroup} from '@angular/forms';
import {FileUploadService} from '../../file-uploader/file-upload.service';
import {EmployeesService} from '../../../employees/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  isNew = false;
  id: string;
  procedure: Procedure;
  procedureForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    titleEn: new FormControl(''),
    text: new FormControl(''),
    textEn: new FormControl('')
  });

  fileUrl: string;

  constructor(private employeesService: EmployeesService,
              private route: ActivatedRoute,
              private router: Router,
              private urlHelperService: UrlHelperService,
              private _location: Location,
              private fileUploadService: FileUploadService) {

    this.employeesService.employeesUpdated$.subscribe(() => {
      this.router.navigate(['/dashboard/employees-management']).then();
    });
    this.fileUploadService.fileUploaded$.subscribe((res) => {
      this.fileUrl = res;
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id === 'new') {
      this.isNew = true;
    } else {
      this.employeesService.getItem(this.id).then(procedure => {
        this.procedure = new Procedure(procedure[0]);
        this.setProcedureFields();
      });
    }
  }

  confirm() {
    this.isNew ? this.addProcedure() : this.editProcedure();
  }

  addProcedure() {
    this.employeesService.addItem(this.getProcedure());
  }

  editProcedure() {
    this.employeesService.updateItem(this.getProcedure());
  }

  setProcedureFields() {
    this.fileUploadService.setFileUrl(this.procedure.image);
    this.procedureForm.patchValue({
      title: this.procedure.title,
      titleEn: this.procedure.titleEn,
      text: this.procedure.text,
      textEn: this.procedure.textEn
    });
  }

  getProcedure() {
    return {
      id: this.isNew ? null : this.procedure.id,
      title: this.procedureForm.get('title').value,
      titleEn: this.procedureForm.get('titleEn').value,
      text: this.procedureForm.get('text').value,
      textEn: this.procedureForm.get('textEn').value,
      image: this.fileUrl ? this.fileUrl : null,
    };
  }

  deleteProcedure(id) {
    this.employeesService.deleteItem(id);
  }
}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UrlHelperService} from '../../../helpers/url-helper.service';
import {Location} from '@angular/common';
import {FormControl, FormGroup} from '@angular/forms';
import {FileUploadService} from '../../file-uploader/file-upload.service';
import {EmployeesService} from '../../../employees/employees.service';
import {Employee} from '../../../employees/employee';
import {Article} from '../../../news/article';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  isNew = false;
  id: string;
  employee: Employee;
  employeeForm: FormGroup = new FormGroup({
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
    this.employee = new Article();
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
      this.employeesService.getItem(this.id).then(employee => {
        this.employee.init(employee);
        this.setProcedureFields();
      });
    }
  }

  confirm() {
    this.isNew ? this.addEmployee() : this.editEmployee();
  }

  addEmployee() {
    this.employeesService.addItem(this.getEmployee());
  }

  editEmployee() {
    this.employeesService.updateItem(this.getEmployee());
  }

  setProcedureFields() {
    this.fileUploadService.setFileUrl(this.employee.image);
    this.employeeForm.patchValue({
      title: this.employee.title,
      titleEn: this.employee.titleEn,
      text: this.employee.text,
      textEn: this.employee.textEn
    });
  }

  getEmployee() {
    return {
      id: this.isNew ? null : this.employee.id,
      title: this.employeeForm.get('title').value,
      titleEn: this.employeeForm.get('titleEn').value,
      text: this.employeeForm.get('text').value,
      textEn: this.employeeForm.get('textEn').value,
      image: this.fileUrl ? this.fileUrl : null,
    };
  }

  deleteEmployee(id) {
    this.employeesService.deleteItem(id);
  }
}

import { Component, OnInit } from '@angular/core';
import {FileUploadService} from '../dashboard/file-uploader/file-upload.service';
import {MatDialog} from '@angular/material/dialog';
import {EmployeesService} from './employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  items = null;

  constructor(private employeesService: EmployeesService,
              private fileUploadService: FileUploadService,
              public dialog: MatDialog) {

    this.employeesService.employeesUpdated$.subscribe(() => {
      this.loadItemsList();
    });
  }

  ngOnInit() {
    this.loadItemsList();
  }

  loadItemsList() {
    this.employeesService.getItems().then((response) => {
      this.items = response;
    });
  }

  editItem(procedure) {

  }

  deleteItem(id) {
    this.employeesService.deleteItem(id);
  }
}

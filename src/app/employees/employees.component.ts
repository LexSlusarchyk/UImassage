import { Component, OnInit } from '@angular/core';
import {FileUploadService} from '../dashboard/file-uploader/file-upload.service';
import {MatDialog} from '@angular/material/dialog';
import {CreateEmployeeModalComponent} from '../dashboard/modals/create-employee-modal/create-employee-modal.component';
import {EmployeesService} from './employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  showFiller = false;
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
      this.items = this.mapItemsList(response);
    });
  }

  mapItemsList(list) {
    const procedureList = [];

    list.map((procedure) => {
      if (procedure.image) {
        procedure.image = this.fileUploadService.getFileUrl(procedure.image);
      }
      procedureList.push(procedure);
    });
    return procedureList;
  }

  editItem(procedure) {
    this.showEditModal(procedure);
  }

  deleteItem(id) {
    this.employeesService.deleteItem(id);
  }

  showEditModal(procedure) {
    const dialogRef = this.dialog.open(CreateEmployeeModalComponent, {
      width: '900px',
      data: { procedure: procedure },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

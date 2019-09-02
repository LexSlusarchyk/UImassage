import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CreateEmployeeModalComponent} from '../modals/create-employee-modal/create-employee-modal.component';

@Component({
  selector: 'app-employees-management',
  templateUrl: './employees-management.component.html',
  styleUrls: ['./employees-management.component.scss']
})
export class EmployeesManagementComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  addEmployee() {
    this.showCreateModal();
  }

  showCreateModal() {
    const dialogRef = this.dialog.open(CreateEmployeeModalComponent, {
      width: '900px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

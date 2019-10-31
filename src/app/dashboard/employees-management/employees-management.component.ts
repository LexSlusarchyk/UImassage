import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {EmployeesService} from '../../employees/employees.service';

@Component({
  selector: 'app-employees-management',
  templateUrl: './employees-management.component.html',
  styleUrls: ['./employees-management.component.scss']
})
export class EmployeesManagementComponent implements OnInit {
  items = null;

  constructor(private employeesService: EmployeesService,
              public dialog: MatDialog) {

    this.employeesService.employeesUpdated$.subscribe(() => {
      this.loadItemsList();
    });
  }

  ngOnInit() {
    this.loadItemsList();
  }

  loadItemsList() {
    this.employeesService.getItems().subscribe((response) => {
      this.items = response;
    });
  }
}

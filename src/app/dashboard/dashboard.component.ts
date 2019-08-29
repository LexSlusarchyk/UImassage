import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {CreateProcedureModalComponent} from './modals/create-procedure-modal/create-procedure-modal.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  addProcedure() {
    this.showCreateProcedureModal();
  }

  showCreateProcedureModal() {
    const dialogRef = this.dialog.open(CreateProcedureModalComponent, {
      width: '900px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

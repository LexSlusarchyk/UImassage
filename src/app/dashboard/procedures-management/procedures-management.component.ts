import { Component, OnInit } from '@angular/core';
import { CreateProcedureModalComponent } from '../modals/create-procedure-modal/create-procedure-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-procedures-management',
  templateUrl: './procedures-management.component.html',
  styleUrls: ['./procedures-management.component.scss']
})
export class ProceduresManagementComponent implements OnInit {

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

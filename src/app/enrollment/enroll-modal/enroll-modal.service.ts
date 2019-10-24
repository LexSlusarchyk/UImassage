import { Injectable } from '@angular/core';
import {EnrollModalComponent} from './enroll-modal.component';
import {MatDialog} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class EnrollModalService {

  constructor(public dialog: MatDialog) { }

  showEnrollModal() {
    const dialogRef = this.dialog.open(EnrollModalComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CreateAlbumModalComponent} from '../modals/create-album-modal/create-album-modal.component';

@Component({
  selector: 'app-gallery-managment',
  templateUrl: './gallery-managment.component.html',
  styleUrls: ['./gallery-managment.component.scss']
})
export class GalleryManagmentComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  addAlbum() {
    this.showCreateModal();
  }

  showCreateModal() {
    const dialogRef = this.dialog.open(CreateAlbumModalComponent, {
      width: '900px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

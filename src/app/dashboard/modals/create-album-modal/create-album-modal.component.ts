import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FileUploadService} from '../../file-uploader/file-upload.service';
import {GalleryService} from '../../../gallery/gallery.service';

@Component({
  selector: 'app-album-modal',
  templateUrl: './create-album-modal.component.html',
  styleUrls: ['./create-album-modal.component.scss']
})
export class CreateAlbumModalComponent implements OnInit {

  itemForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    text: new FormControl('')
  });

  fileUrl: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<CreateAlbumModalComponent>,
              private galleryService: GalleryService,
              private fileUploadService: FileUploadService) {
    this.galleryService.galleryUpdated$.subscribe(() => {
      this.closeModal();
    });
    this.fileUploadService.fileUploaded$.subscribe((res) => {
      this.fileUrl = res;
    });
  }

  ngOnInit() {
    this.setItemFields();
  }

  setItemFields() {
    if (this.isEdited()) {
      this.fileUploadService.setFileUrl(this.data.procedure.image);
      this.itemForm.patchValue({
        title: this.data.procedure.title,
        text: this.data.procedure.text
      });
    }
  }

  confirm() {
    this.isEdited() ? this.editItem() : this.addItem();
  }

  addItem() {
    this.galleryService.addItem(this.getItem());
  }

  editItem() {
    this.galleryService.updateItem(this.getItem());
  }

  getItem() {
    return {
      id: this.isEdited() ? this.data.procedure.id : null,
      title: this.itemForm.get('title').value,
      text: this.itemForm.get('text').value,
      image: this.fileUrl ? this.fileUrl : null
    };
  }

  onNoClick(): void {
    this.closeModal();
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  isEdited(): boolean {
    return this.data && this.data.procedure;
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {FileUploadService} from './file-upload.service';
import {UrlHelperService} from '../../helpers/url-helper.service';
import {ImageCroppedEvent} from 'ngx-image-cropper';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit, OnDestroy {
  selectedFile: File = null;
  fileUrl: string;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  private createThumbnailSubscription: Subscription;

  constructor(
    private fileUploadService: FileUploadService,
    public urlHelperService: UrlHelperService
  ) {
    this.fileUploadService.fileUploaded$.subscribe((res) => {
      this.fileUrl = res;
    });
    this.createThumbnailSubscription = this.fileUploadService.createThumbnail$.subscribe((res) => {
      setTimeout(() => {
        console.log(res, 'createThumbnail$');
        // need Time For Drawing Thumbnail
        this.createThumbnail(res);
      }, 3000);
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.createThumbnailSubscription.unsubscribe();
  }

  onFileSelected(event) {
    console.log('onFileSelected');
    this.selectedFile = event.target.files[0] as File;
    this.fileUploadService.uploadFile(this.selectedFile);
    this.imageChangedEvent = event;
  }

  createThumbnail(originalImgName) {
    fetch(this.croppedImage)
      .then(res => res.blob())
      .then(blob => {
        this.fileUploadService.uploadThumbnail(blob, originalImgName);
      });
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    console.log(this.croppedImage);
  }

}

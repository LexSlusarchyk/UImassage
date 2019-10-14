import {Component, ElementRef, AfterViewInit, ViewChild} from '@angular/core';
import {ImageCroppedEvent} from 'ngx-image-cropper';
import {FileUploadService} from '../file-uploader/file-upload.service';

@Component({
  selector: 'app-img-cropper',
  templateUrl: './img-cropper.component.html',
  styleUrls: ['./img-cropper.component.scss']
})
export class ImgCropperComponent implements AfterViewInit {
  @ViewChild('imgInput', {static: false}) imgInput: ElementRef;
  imageChangedEvent: any = '';
  croppedImage: any = '';

  constructor(private fileUploadService: FileUploadService) { }

  ngAfterViewInit() {
    this.imgInput.nativeElement.click();
  }

  confirm() {
    fetch(this.croppedImage)
      .then(res => res.blob())
      .then(blob => {
        this.fileUploadService.uploadFile(blob);
      });
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

}

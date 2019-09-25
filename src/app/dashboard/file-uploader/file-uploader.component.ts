import { Component, OnInit } from '@angular/core';
import {FileUploadService} from './file-upload.service';
import {UrlHelperService} from '../../helpers/url-helper.service';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {
  selectedFile: File = null;
  fileUrl: string;

  constructor(
    private fileUploadService: FileUploadService,
    private urlHelperService: UrlHelperService
  ) {
    this.fileUploadService.fileUploaded$.subscribe((res) => {
      this.fileUrl = res;
    });
  }

  ngOnInit() {
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0] as File;
    this.fileUploadService.uploadFile(this.selectedFile);
  }

}

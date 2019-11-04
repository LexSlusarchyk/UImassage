import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) { }

  uploadsUrl = 'http://www.api.spa-delight.lviv.ua/public/uploads/';

  private fileUploaded = new Subject<string>();
  fileUploaded$ = this.fileUploaded.asObservable();

  uploadFile(file) {
    const formData = new FormData();

    formData.append('image', file );
    this.http.post('http://api.spa-delight.lviv.ua/public/api/uploads', formData).subscribe((res) => {
      this.fileUploaded.next(res.toString());
    });
  }

  uploadImage(file) {
    const formData = new FormData();

    formData.append('image', file );
    return this.http.post('http://api.spa-delight.lviv.ua/public/api/uploads', formData).toPromise();
  }

  getFileUrl(fileName) {
    return this.uploadsUrl + fileName;
  }

  setFileUrl(fileUrl) {
    this.fileUploaded.next(fileUrl);
  }
}


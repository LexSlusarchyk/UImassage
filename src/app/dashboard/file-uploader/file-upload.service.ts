import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(
    private http: HttpClient
  ) { }

  uploadsUrl = 'http://localhost/api/public/uploads/';

  private fileUploaded = new Subject<string>();
  fileUploaded$ = this.fileUploaded.asObservable();

  uploadFile(file) {
    const formData = new FormData();

    formData.append('image', file );
    this.http.post('/api/uploads', formData).subscribe((res) => {
      this.fileUploaded.next(this.uploadsUrl + res.toString());
    });
  }

  getFileUrl(fileName) {
    return this.uploadsUrl + fileName;
  }

  setFileUrl(fileUrl) {
    this.fileUploaded.next(fileUrl);
  }
}


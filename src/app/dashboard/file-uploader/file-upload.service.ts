import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';
import {environment} from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) { }

  uploadsUrl = environment.apiAddress;

  private fileUploaded = new Subject<string>();
  fileUploaded$ = this.fileUploaded.asObservable();

  uploadFile(file) {
    const formData = new FormData();

    formData.append('image', file );
    this.http.post(this.uploadsUrl + '/uploads', formData).subscribe((res) => {
      this.fileUploaded.next(res.toString());
    });
  }

  uploadImage(file) {
    const formData = new FormData();

    formData.append('image', file );
    return this.http.post(this.uploadsUrl + '/uploads', formData).toPromise();
  }

  setFileUrl(fileUrl) {
    this.fileUploaded.next(fileUrl);
  }
}


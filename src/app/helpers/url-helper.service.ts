import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlHelperService {
  uploadsUrl = 'http://localhost:8000/public/uploads/';

  constructor() { }

  getImageUrl(imageName: string): string {
    return  this.uploadsUrl + imageName;
  }
}

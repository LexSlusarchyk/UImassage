import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlHelperService {
  uploadsUrl = 'http://www.api.spa-delight.lviv.ua/public/uploads/';

  constructor() { }

  getImageUrl(imageName: string): string {
    return  this.uploadsUrl + imageName;
  }
}

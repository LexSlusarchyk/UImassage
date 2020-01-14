import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlHelperService {
  uploadsUrl = environment.uploadsImgAddress;

  constructor() { }

  getImageUrl(imageName: string): string {
    // console.log('getImageUrl');
    return  imageName ? `${this.uploadsUrl}/${imageName}` : environment.fallbackImg;
  }
}

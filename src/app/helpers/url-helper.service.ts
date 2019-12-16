import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlHelperService {
  uploadsUrl = environment.uploadsImgAddress;

  constructor() { }

  getImageUrl(imageName: string): string {
    return  `${this.uploadsUrl}/${imageName}`;
  }
}

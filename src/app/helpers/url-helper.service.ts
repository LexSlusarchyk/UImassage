import { Injectable } from '@angular/core';
import {environment} from '../environment/environment';

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

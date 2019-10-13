import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditorService {
  private initialHtmlText = new Subject<string>();
  initialHtmlText$ = this.initialHtmlText.asObservable();

  htmlText = '';

  constructor() { }

  setInitialHtmlText(text) {
    this.initialHtmlText.next(text);
  }

  setHtmlText(text) {
    this.htmlText = text;
  }

  getHtmlText(): string {
    return this.htmlText;
  }
}

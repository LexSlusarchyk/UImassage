import {Component, Input, OnChanges} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-markup-container',
  templateUrl: './markup-container.component.html',
  styleUrls: ['./markup-container.component.scss']
})
export class MarkupContainerComponent implements OnChanges {
  @Input() htmlText?: string;
  trustedHtmlText;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnChanges() {
    this.trustedHtmlText = this.sanitizer.bypassSecurityTrustHtml(this.htmlText);
  }

}

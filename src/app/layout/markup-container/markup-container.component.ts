import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-markup-container',
  templateUrl: './markup-container.component.html',
  styleUrls: ['./markup-container.component.scss']
})
export class MarkupContainerComponent implements OnInit {
  @Input() htmlText?: string;
  trustedHtmlText;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.trustedHtmlText = this.sanitizer.bypassSecurityTrustHtml(this.htmlText);
  }

}

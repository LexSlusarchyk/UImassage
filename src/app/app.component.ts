import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LanguageService} from './helpers/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  sideNavOpened = false;
  isMobile = false;
  public innerWidth: any;


  constructor(public langService: LanguageService) {

  }

  ngOnInit() {
    this.defineSideNavLayout();
  }

  defineSideNavLayout() {
    this.innerWidth = window.innerWidth;

    if (this.innerWidth < 769) {
      this.isMobile = true;
    }
  }

  closeSideNav(): void {
    this.sideNavOpened = false;
  }

  onSideNavOpenedChange(value: boolean) {
    this.sideNavOpened = value;
  }
}


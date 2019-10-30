import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LanguageService} from './helpers/language.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  sideNavOpened = false;
  isMobile = false;
  public innerWidth: any;


  constructor(public langService: LanguageService,
              private translateService: TranslateService,
              private router: Router) {

    translateService.setDefaultLang('uk');
    router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.defineLanguage();
        }
      }
    );
  }

  ngOnInit() {
    this.defineSideNavLayout();
  }

  defineLanguage() {
    if (this.router.url.includes('/en/')) {
      this.translateService.use('en');
      this.langService.setCurrentLanguage('en');
    } else {
      this.translateService.use('uk');
      this.langService.setCurrentLanguage('uk');
    }
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


import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  languages = [
    {
      id: 'uk',
      title: 'УК'
    },
    {
      id: 'en',
      title: 'EN'
    }
  ];

  currentLanguage;

  constructor(private router: Router,
              private translateService: TranslateService) {

    this.setCurrentLanguage();
  }


  setCurrentLanguage(language?) {
    if (language) {
      this.currentLanguage = this.getLanguageById(language);
    } else {
      this.currentLanguage = this.getLanguageById(this.getUserLanguageFromLocalStorage()) || this.languages[0];
    }
  }

  selectLanguage(language) {
    this.currentLanguage = language;
    this.translateService.use(this.currentLanguage.id);
    this.setLanguageToLocalStorage(language);

    if (this.currentLanguage.id === 'en') {
      if (this.router.routerState.snapshot.url.includes('/en/')) { return; }
      this.router.navigate(['en' + this.router.routerState.snapshot.url]).then();
    } else {
      const defaultLangUrl = this.router.routerState.snapshot.url.replace('/en/', '/');
      this.router.navigate([defaultLangUrl]).then();
    }
  }

  getLanguageById(id) {
    return this.languages.find( el =>  el.id === id);
  }

  setLanguageToLocalStorage(language) {
    localStorage.setItem('language', language.id);
  }

  getUserLanguageFromLocalStorage() {
    return localStorage.getItem('language');
  }
}

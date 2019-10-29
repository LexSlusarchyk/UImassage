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

  currentLanguage = this.setCurrentLanguage();

  constructor(private router: Router,
              private translateService: TranslateService) {
    translateService.setDefaultLang('en');
  }


  setCurrentLanguage() {
    return this.getLanguageById(this.getUserLanguageFromLocalStorage()) || this.languages[0];
  }

  selectLanguage(language) {
    this.currentLanguage = language;
    this.setLanguageToLocalStorage(language);
    this.translateService.use(this.currentLanguage.id);


    if (this.currentLanguage.id !== 'uk') {
      // console.log('en' + this.router.routerState.snapshot.url);
      // this.router.navigate(['en/home']).then();
    } else {
      // this.router.navigate(['home']).then();
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

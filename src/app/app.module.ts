import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';

import {HeaderComponent} from './header/header.component';
import {CategoriesModule} from './categories/categories.module';
import { FooterComponent } from './footer/footer.component';
import {HomeModule} from './home/home.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FileUploaderModule} from './dashboard/file-uploader/file-uploader.module';
import {NewsModule} from './news/news.module';
import {LayoutModule} from './layout/layout.module';
import { EnrollModalComponent } from './enrollment/enroll-modal/enroll-modal.component';
import {JwtModule} from '@auth0/angular-jwt';
import {TranslationSharedModule} from './helpers/Translation/translation-shared.module';
import {TranslateStore} from '@ngx-translate/core';
import { HeaderNavListComponent } from './header/header-nav-list/header-nav-list.component';

export function jwtTokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EnrollModalComponent,
    HeaderNavListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslationSharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    CategoriesModule,
    HomeModule,
    NewsModule,
    FontAwesomeModule,
    FileUploaderModule,
    LayoutModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter,
        whitelistedDomains: ['localhost:8000', 'spa-delight.lviv.ua', 'api.spa-delight.lviv.ua'],
        blacklistedRoutes: []
      }
    }),

    ReactiveFormsModule,
  ],

  entryComponents: [
    EnrollModalComponent
  ],

  providers: [TranslateStore],
  bootstrap: [AppComponent]
})
export class AppModule { }

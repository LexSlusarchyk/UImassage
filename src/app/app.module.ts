import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { CreateProcedureModalComponent } from './dashboard/modals/create-procedure-modal/create-procedure-modal.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesManagementComponent } from './dashboard/employees-management/employees-management.component';
import { CreateEmployeeModalComponent } from './dashboard/modals/create-employee-modal/create-employee-modal.component';
import { ProductsManagementComponent } from './dashboard/products-management/products-management.component';
import { ProductsComponent } from './products/products.component';
import { CreateProductModalComponent } from './dashboard/modals/create-product-modal/create-product-modal.component';
import { NewsComponent } from './news/news.component';
import { CreateArticleModalComponent } from './dashboard/modals/create-article-modal/create-article-modal.component';
import { NewsManagementComponent } from './dashboard/news-management/news-management.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryManagementComponent } from './dashboard/gallery-management/gallery-management.component';
import { CreateAlbumModalComponent } from './dashboard/modals/create-album-modal/create-album-modal.component';
import { CreateCategoryModalComponent } from './dashboard/modals/create-category-modal/create-category-modal.component';
import {HeaderComponent} from './header/header.component';
import {CategoriesModule} from './categories/categories.module';
import { FooterComponent } from './footer/footer.component';
import {HomeModule} from './home/home.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FileUploaderModule} from './dashboard/file-uploader/file-uploader.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateProcedureModalComponent,
    EmployeesComponent,
    EmployeesManagementComponent,
    CreateEmployeeModalComponent,
    ProductsManagementComponent,
    ProductsComponent,
    CreateProductModalComponent,
    NewsComponent,
    CreateArticleModalComponent,
    NewsManagementComponent,
    GalleryComponent,
    GalleryManagementComponent,
    CreateAlbumModalComponent,
    CreateCategoryModalComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    CategoriesModule,
    HomeModule,
    FontAwesomeModule,
    FileUploaderModule,

    ReactiveFormsModule,
  ],

  entryComponents: [
    CreateProcedureModalComponent,
    CreateEmployeeModalComponent,
    CreateProductModalComponent,
    CreateArticleModalComponent,
    CreateAlbumModalComponent,
    CreateCategoryModalComponent,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

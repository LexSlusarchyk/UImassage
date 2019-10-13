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
import { CreateEmployeeModalComponent } from './dashboard/modals/create-employee-modal/create-employee-modal.component';
import { ProductsManagementComponent } from './dashboard/products-management/products-management.component';
import { ProductsComponent } from './products/products.component';
import { CreateProductModalComponent } from './dashboard/modals/create-product-modal/create-product-modal.component';
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
import {NewsModule} from './news/news.module';
import {LayoutModule} from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateEmployeeModalComponent,
    ProductsManagementComponent,
    ProductsComponent,
    CreateProductModalComponent,
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
    NewsModule,
    FontAwesomeModule,
    FileUploaderModule,
    LayoutModule,

    ReactiveFormsModule,
  ],

  entryComponents: [
    CreateEmployeeModalComponent,
    CreateProductModalComponent,
    CreateAlbumModalComponent,
    CreateCategoryModalComponent,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

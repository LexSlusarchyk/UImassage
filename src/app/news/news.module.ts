import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material.module';

import {NewsRoutingModule} from './news-routing.module';
import {CategoriesModule} from '../categories/categories.module';
import { NewsListComponent } from './news-list/news-list.component';
import {NewsComponent} from './news.component';
import {LayoutModule} from '../layout/layout.module';



@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    NewsRoutingModule,
    CategoriesModule,
    LayoutModule
  ],
  declarations: [
    NewsComponent,
    NewsListComponent,
  ],
  exports: [
    NewsComponent,
    NewsListComponent
  ]
})
export class NewsModule {}

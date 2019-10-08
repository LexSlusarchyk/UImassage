import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsComponent} from './news.component';
import {NewsListComponent} from './news-list/news-list.component';

const newsRoutes: Routes = [
  {
    path: '',
    component: NewsComponent,
    // canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(newsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class NewsRoutingModule {}

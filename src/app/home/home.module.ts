import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material.module';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {CategoriesModule} from '../categories/categories.module';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    CategoriesModule,
    HomeRoutingModule,

    SwiperModule
  ],
  declarations: [
    HomeComponent,
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  exports: []
})
export class HomeModule {}

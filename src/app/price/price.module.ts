import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material.module';
import {PriceComponent} from './price.component';
import {PriceRoutingModule} from './price-routing.module';
import {CategoriesModule} from '../categories/categories.module';
import {PriceAccordionComponent} from './price-accordion/price-accordion.component';




@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    PriceRoutingModule,
    CategoriesModule,
  ],
  declarations: [
    PriceComponent,
    PriceAccordionComponent
  ],
  exports: [
  ]
})
export class PriceModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PriceComponent} from './price.component';


const priceRoutes: Routes = [
  {
    path: '',
    component: PriceComponent,
    // canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(priceRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PriceRoutingModule {}

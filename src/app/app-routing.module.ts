import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {EmployeesManagementComponent} from './dashboard/employees-management/employees-management.component';
import {ProductsManagementComponent} from './dashboard/products-management/products-management.component';
import {NewsManagementComponent} from './dashboard/news-management/news-management.component';
import {GalleryManagementComponent} from './dashboard/gallery-management/gallery-management.component';
import {CategoriesManagementComponent} from './dashboard/categories-management/categories-management.component';

const routes: Routes = [

  { path: 'dashboard', component: DashboardComponent },
  { path: 'employees', component: EmployeesManagementComponent },
  { path: 'products', component: ProductsManagementComponent },
  { path: 'news', component: NewsManagementComponent },
  { path: 'gallery', component: GalleryManagementComponent },
  { path: 'categories', component: CategoriesManagementComponent },

  {
    path: 'procedures',
    loadChildren: () => import('./procedures/procedures.module').then(mod => mod.ProceduresModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

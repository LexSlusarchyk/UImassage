import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsManagementComponent} from './dashboard/products-management/products-management.component';
import {GalleryManagementComponent} from './dashboard/gallery-management/gallery-management.component';
import {AuthGuard} from './auth/_guards/auth.guard';

const routes: Routes = [
  { path: 'products', component: ProductsManagementComponent },
  { path: 'gallery', component: GalleryManagementComponent },

  {
    path: 'procedures',
    loadChildren: () => import('./procedures/procedures.module').then(mod => mod.ProceduresModule),
  },
  {
    path: ':language/procedures',
    loadChildren: () => import('./procedures/procedures.module').then(mod => mod.ProceduresModule),
  },

  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then(mod => mod.NewsModule),
  },
  {
    path: ':language/news',
    loadChildren: () => import('./news/news.module').then(mod => mod.NewsModule),
  },

  {
    path: 'employees',
    loadChildren: () => import('./employees/employees.module').then(mod => mod.EmployeesModule),
  },
  {
    path: ':language/employees',
    loadChildren: () => import('./employees/employees.module').then(mod => mod.EmployeesModule),
  },

  {
    path: 'price',
    loadChildren: () => import('./price/price.module').then(mod => mod.PriceModule),
  },
  {
    path: ':language/price',
    loadChildren: () => import('./price/price.module').then(mod => mod.PriceModule),
  },

  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then(mod => mod.ContactsModule),
  },
  {
    path: ':language/contacts',
    loadChildren: () => import('./contacts/contacts.module').then(mod => mod.ContactsModule),
  },

  {
    path: ':language/dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule),
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule),
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
  },

  {
    path: ':language/home',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
  },

  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule),
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeesManagementComponent} from './dashboard/employees-management/employees-management.component';
import {ProductsManagementComponent} from './dashboard/products-management/products-management.component';
import {GalleryManagementComponent} from './dashboard/gallery-management/gallery-management.component';
import {ContactsComponent} from './home/contacts/contacts.component';

const routes: Routes = [
  { path: 'employees', component: EmployeesManagementComponent },
  { path: 'products', component: ProductsManagementComponent },
  { path: 'gallery', component: GalleryManagementComponent },
  { path: 'contacts', component: ContactsComponent },

  {
    path: 'procedures',
    loadChildren: () => import('./procedures/procedures.module').then(mod => mod.ProceduresModule),
  },

  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then(mod => mod.NewsModule),
  },

  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule),
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

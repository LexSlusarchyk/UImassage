import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import {EmployeesManagementComponent} from './dashboard/employees-management/employees-management.component';
import {ProceduresManagementComponent} from './dashboard/procedures-management/procedures-management.component';
import {ProductsManagementComponent} from './dashboard/products-management/products-management.component';
import {NewsManagementComponent} from './dashboard/news-management/news-management.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employees', component: EmployeesManagementComponent },
  { path: 'procedures', component: ProceduresManagementComponent },
  { path: 'products', component: ProductsManagementComponent },
  { path: 'news', component: NewsManagementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

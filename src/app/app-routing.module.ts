import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import {EmployeesManagementComponent} from './dashboard/employees-management/employees-management.component';
import {ProceduresManagmentComponent} from './dashboard/procedures-managment/procedures-managment.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employees', component: EmployeesManagementComponent },
  { path: 'procedures', component: ProceduresManagmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

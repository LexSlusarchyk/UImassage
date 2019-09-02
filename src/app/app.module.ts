import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProceduresComponent } from './procedures/procedures.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { CreateProcedureModalComponent } from './dashboard/modals/create-procedure-modal/create-procedure-modal.component';
import { FileUploaderComponent } from './dashboard/file-uploader/file-uploader.component';
import { EmployeesComponent } from './employees/employees.component';
import { SideNavComponent } from './dashboard/side-nav/side-nav.component';
import { EmployeesManagementComponent } from './dashboard/employees-management/employees-management.component';
import { ProceduresManagmentComponent } from './dashboard/procedures-managment/procedures-managment.component';
import { CreateEmployeeModalComponent } from './dashboard/modals/create-employee-modal/create-employee-modal.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    ProceduresComponent,
    CreateProcedureModalComponent,
    FileUploaderComponent,
    EmployeesComponent,
    SideNavComponent,
    EmployeesManagementComponent,
    ProceduresManagmentComponent,
    CreateEmployeeModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,

    ReactiveFormsModule,
  ],

  entryComponents: [
    CreateProcedureModalComponent,
    CreateEmployeeModalComponent,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

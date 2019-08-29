import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProceduresComponent } from './procedures/procedures.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from './material.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { CreateProcedureModalComponent } from './dashboard/modals/create-procedure-modal/create-procedure-modal.component';
import { FileUploaderComponent } from './dashboard/file-uploader/file-uploader.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    ProceduresComponent,
    CreateProcedureModalComponent,
    FileUploaderComponent,
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

  entryComponents: [CreateProcedureModalComponent],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

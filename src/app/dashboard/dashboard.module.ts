import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material.module';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {CategoriesManagementComponent} from './categories-management/categories-management.component';
import {SideNavComponent} from './side-nav/side-nav.component';
import {CategoriesModule} from '../categories/categories.module';
import {ProceduresModule} from '../procedures/procedures.module';
import {ProceduresManagementComponent} from './procedures-management/procedures-management.component';
import { EditProcedureComponent } from './procedures-management/edit-procedure/edit-procedure.component';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FileUploaderModule} from './file-uploader/file-uploader.module';
import {NewsModule} from '../news/news.module';
import {NewsManagementComponent} from './news-management/news-management.component';
import {EditArticleComponent} from './news-management/edit-article/edit-article.component';
import {EmployeesModule} from '../employees/employees.module';
import {EmployeesManagementComponent} from './employees-management/employees-management.component';
import {EditEmployeeComponent} from './employees-management/edit-employee/edit-employee.component';

import { QuillModule } from 'ngx-quill';
import { ImageCropperModule } from 'ngx-image-cropper';
import {EditorComponent} from './editor/editor.component';
import {ImgCropperComponent} from './img-cropper/img-cropper.component';

@NgModule({
  imports: [
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,

    CommonModule,
    DashboardRoutingModule,
    CategoriesModule,
    ProceduresModule,
    NewsModule,
    EmployeesModule,
    FileUploaderModule,

    QuillModule,
    ImageCropperModule,
    FormsModule
  ],
  declarations: [
    DashboardComponent,
    CategoriesManagementComponent,
    ProceduresManagementComponent,
    NewsManagementComponent,
    EmployeesManagementComponent,
    SideNavComponent,
    EditProcedureComponent,
    EditArticleComponent,
    EditEmployeeComponent,
    EditorComponent,
    ImgCropperComponent
  ]
})
export class DashboardModule {}

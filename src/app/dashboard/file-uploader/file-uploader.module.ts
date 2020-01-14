import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../material.module';
import {FileUploaderComponent} from './file-uploader.component';
import {ImageCropperModule} from 'ngx-image-cropper';

@NgModule({
  imports: [
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,

    CommonModule,
    ImageCropperModule,
  ],
  declarations: [
    FileUploaderComponent
  ],
  exports: [
    FileUploaderComponent
  ]
})
export class FileUploaderModule {}

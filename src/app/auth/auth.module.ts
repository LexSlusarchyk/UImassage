import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MaterialModule} from '../material.module';
import {AuthRoutingModule} from './auth-routing.module';
import {SignInComponent} from './sign-in/sign-in.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AuthRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    SignInComponent
  ],
  exports: [
  ]
})
export class AuthModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactsComponent} from './contacts.component';

const contactsRoutes: Routes = [
  {
    path: '',
    component: ContactsComponent,
    // canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(contactsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContactsRoutingModule {}

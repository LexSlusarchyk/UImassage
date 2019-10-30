import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactsComponent} from './contacts.component';

const contactsRoutes: Routes = [
  {
    path: '',
    component: ContactsComponent,
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

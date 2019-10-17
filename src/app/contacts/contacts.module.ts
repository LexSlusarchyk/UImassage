import { NgModule } from '@angular/core';
import {ContactsComponent} from './contacts.component';
import {ContactsRoutingModule} from './contacts-routing.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';




@NgModule({
  imports: [
    ContactsRoutingModule,
    FontAwesomeModule,
  ],
  declarations: [
    ContactsComponent
  ],
  exports: []
})
export class ContactsModule {}

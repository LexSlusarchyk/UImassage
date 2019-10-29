import { NgModule } from '@angular/core';
import {ContactsComponent} from './contacts.component';
import {ContactsRoutingModule} from './contacts-routing.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {TranslationSharedModule} from '../helpers/Translation/translation-shared.module';




@NgModule({
  imports: [
    ContactsRoutingModule,
    FontAwesomeModule,
    TranslationSharedModule
  ],
  declarations: [
    ContactsComponent
  ],
  exports: []
})
export class ContactsModule {}

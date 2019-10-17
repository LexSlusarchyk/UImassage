import { Component, OnInit } from '@angular/core';
import {faCalendar, faPhone} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faHome = faHome;
  faCalendar = faCalendar;

  constructor() { }

  ngOnInit() {
  }

}

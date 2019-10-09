import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faPhone} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faPhone = faPhone;
  @Input()  sideNavOpened: boolean;
  @Output() sideNavOpenedChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  toggleMenuNav() {
    this.sideNavOpened = !this.sideNavOpened;
    this.sideNavOpenedChange.emit(this.sideNavOpened);
  }
}

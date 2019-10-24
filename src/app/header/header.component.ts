import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {EnrollModalService} from '../enrollment/enroll-modal/enroll-modal.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faPhone = faPhone;
  @Input()  sideNavOpened: boolean;
  @Output() sideNavOpenedChange = new EventEmitter<boolean>();

  constructor(private enrollModalService: EnrollModalService) { }

  ngOnInit() {
  }

  toggleMenuNav() {
    this.sideNavOpened = !this.sideNavOpened;
    this.sideNavOpenedChange.emit(this.sideNavOpened);
  }

  showEnrollModal(): void {
    this.enrollModalService.showEnrollModal();
  }
}

import {AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {EnrollModalService} from '../enrollment/enroll-modal/enroll-modal.service';
import {LanguageService} from '../helpers/language.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements AfterViewInit {
  faPhone = faPhone;
  @Input()  sideNavOpened: boolean;
  @Output() sideNavOpenedChange = new EventEmitter<boolean>();

  constructor(private enrollModalService: EnrollModalService,
              public langService: LanguageService) {}

  ngAfterViewInit() {
  }

  toggleMenuNav() {
    this.sideNavOpened = !this.sideNavOpened;
    this.sideNavOpenedChange.emit(this.sideNavOpened);
  }

  showEnrollModal(): void {
    this.enrollModalService.showEnrollModal();
  }

  selectLanguage(language): void {
    this.langService.selectLanguage(language);
  }
}

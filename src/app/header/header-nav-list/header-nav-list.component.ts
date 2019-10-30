import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LanguageService} from '../../helpers/language.service';

@Component({
  selector: 'app-header-nav-list',
  templateUrl: './header-nav-list.component.html',
  styleUrls: ['./header-nav-list.component.scss']
})
export class HeaderNavListComponent {
  @Input()  isVertical?: boolean;
  @Output() sideNavOpenedChange = new EventEmitter<boolean>();

  constructor(public langService: LanguageService) { }

  closeSideNav(): void {
    this.sideNavOpenedChange.emit(false);
  }
}

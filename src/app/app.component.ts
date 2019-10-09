import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  sideNavOpened = false;

  constructor() {
  }

  ngOnInit() {
  }

  closeSideNav(): void {
    this.sideNavOpened = false;
  }

  onSideNavOpenedChange(value: boolean) {
    this.sideNavOpened = value;
  }
}


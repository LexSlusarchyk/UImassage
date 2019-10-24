import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  sideNavOpened = false;
  isMobile = false;
  public innerWidth: any;


  constructor() {}

  ngOnInit() {
    this.defineSideNavLayout();
  }

  defineSideNavLayout() {
    this.innerWidth = window.innerWidth;

    if (this.innerWidth < 769) {
      this.isMobile = true;
    }
  }

  closeSideNav(): void {
    this.sideNavOpened = false;
  }

  onSideNavOpenedChange(value: boolean) {
    this.sideNavOpened = value;
  }
}


import {Component, Input, OnInit} from '@angular/core';
import {ProceduresService} from './procedures.service';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.scss']
})
export class ProceduresComponent implements OnInit {
  procedures = null;
  sideNavOpened = true;
  public innerWidth: any;

  constructor(private proceduresService: ProceduresService,
              public dialog: MatDialog) {

    this.proceduresService.proceduresUpdated$.subscribe(() => {
      this.loadProcedures();
    });
  }

  ngOnInit() {
    this.loadProcedures();
    this.defineSideNavState();
  }

  defineSideNavState() {
    this.innerWidth = window.innerWidth;

    if (this.innerWidth < 769) {
      this.sideNavOpened = false;
    }
  }

  loadProcedures() {
    this.proceduresService.getProcedures().then((response) => {
      this.procedures = response;
    });
  }

  toggleSideNav(): void {
    this.sideNavOpened = !this.sideNavOpened;
  }
}

import { Component, OnInit } from '@angular/core';
import {EnrollService} from '../../enrollment/enroll.service';

@Component({
  selector: 'app-enrollment-management',
  templateUrl: './enrollment-management.component.html',
  styleUrls: ['./enrollment-management.component.scss']
})
export class EnrollmentManagementComponent implements OnInit {
  itemsList;
  displayedColumns: string[] = ['name', 'phone', 'subject', 'message', 'date'];
  constructor(private enrollService: EnrollService) { }

  ngOnInit() {
    this.enrollService.getItems().then(res => {
      this.itemsList = res;
    });
  }

}

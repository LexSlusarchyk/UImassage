import { Component, OnInit } from '@angular/core';
import {ProceduresService} from '../procedures/procedures.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(private proceduresService: ProceduresService) { }

  ngOnInit() {
  }

  addProcedure() {
    this.proceduresService.addProcedure();
  }

}

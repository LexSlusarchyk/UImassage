import { Component, OnInit } from '@angular/core';
import {ProceduresService} from './procedures.service';

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.sass']
})
export class ProceduresComponent implements OnInit {
  procedures = null;

  constructor(private proceduresService: ProceduresService) { }

  ngOnInit() {
    const _this = this;

    this.proceduresService.getProcedures().then(function (response) {
      _this.procedures = response;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {ProceduresService} from './procedures.service';

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.scss']
})
export class ProceduresComponent implements OnInit {
  procedures = null;

  constructor(private proceduresService: ProceduresService) {
    this.proceduresService.proceduresUpdated$.subscribe(() => {
      this.loadProcedures();
    });
  }

  ngOnInit() {
    this.loadProcedures();
  }

  loadProcedures() {
    const _this = this;

    this.proceduresService.getProcedures().then(function (response) {
      _this.procedures = response;
    });
  }

  editProcedure() {
    console.log('edit');
  }

  deleteProcedure(id) {
    this.proceduresService.deleteProcedure(id);
  }

}

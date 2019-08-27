import { Component, OnInit } from '@angular/core';
import { ProceduresService } from '../procedures/procedures.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import {FormControl, FormGroup} from '@angular/forms';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  procedureForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    text: new FormControl('')
  });

  constructor(private proceduresService: ProceduresService) { }

  ngOnInit() {
  }

  addProcedure() {
    let x = this.procedureForm.get('title').value;
    let y  = this.procedureForm.get('text').value;
    this.proceduresService.addProcedure({
      title: this.procedureForm.get('title').value, text: this.procedureForm.get('text').value
    });
  }



}

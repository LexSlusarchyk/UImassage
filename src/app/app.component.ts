import {Component, OnInit} from '@angular/core';
import {ProceduresService} from './procedures/procedures.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Lex App';

  constructor(private proceduresService: ProceduresService) {
  }

  ngOnInit() {
  }

}


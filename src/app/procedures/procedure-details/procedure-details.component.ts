import { Component, OnInit } from '@angular/core';
import {Procedure} from '../procedure';
import {ActivatedRoute} from '@angular/router';
import {UrlHelperService} from '../../helpers/url-helper.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-procedure-details',
  templateUrl: './procedure-details.component.html',
  styleUrls: ['./procedure-details.component.scss']
})
export class ProcedureDetailsComponent implements OnInit {
  procedure: Procedure;
  constructor(private route: ActivatedRoute,
              private urlHelperService: UrlHelperService,
              private _location: Location) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { procedure: Procedure }) => {
        this.procedure = data.procedure[0];
      });

  }

  goBack() {
    this._location.back();
  }

}

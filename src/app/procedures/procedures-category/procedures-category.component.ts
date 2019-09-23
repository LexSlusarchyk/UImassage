import { Component, OnInit } from '@angular/core';
import {Procedure} from '../procedure';
import {ActivatedRoute} from '@angular/router';
import {Category} from '../../categories/category';
import {ProceduresService} from '../procedures.service';
import {UrlHelperService} from '../../helpers/url-helper.service';

@Component({
  selector: 'app-procedures-category',
  templateUrl: './procedures-category.component.html',
  styleUrls: ['./procedures-category.component.scss']
})
export class ProceduresCategoryComponent implements OnInit {
  category;
  proceduresList;
  constructor(private route: ActivatedRoute,
              private proceduresService: ProceduresService,
              private urlHelperService: UrlHelperService) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { category: Category }) => {
        console.log(data);
        this.category = data.category[0];
        this.getProceduresListByCategory(data.category[0].id);
      });
  }

  getProceduresListByCategory(id) {
    this.proceduresService.getProceduresByCategoryId(id).then( (res) => {
      this.proceduresList = res;
    });
  }

}

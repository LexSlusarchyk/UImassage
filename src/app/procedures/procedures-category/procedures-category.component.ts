import { Component, OnInit } from '@angular/core';
import {Procedure} from '../procedure';
import {ActivatedRoute} from '@angular/router';
import {Category} from '../../categories/category';
import {ProceduresService} from '../procedures.service';
import {UrlHelperService} from '../../helpers/url-helper.service';
import {CategoriesService} from '../../categories/categories.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-procedures-category',
  templateUrl: './procedures-category.component.html',
  styleUrls: ['./procedures-category.component.scss']
})
export class ProceduresCategoryComponent implements OnInit {
  category;
  proceduresList;
  categoryList;

  constructor(private route: ActivatedRoute,
              private proceduresService: ProceduresService,
              private categoriesService: CategoriesService,
              private urlHelperService: UrlHelperService,
              private _location: Location) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { category: Category }) => {
        this.category = data.category[0];
        this.getProceduresListByCategory(data.category[0].id);
        this.getCategoryChildren(data.category[0].id);
      });
  }

  getCategoryChildren(id) {
    this.categoriesService.getCategoryChildren(id).then((res) => {
      this.categoryList = res;
    });
  }

  getProceduresListByCategory(id) {
    this.proceduresService.getProceduresByCategoryId(id).then( (res) => {
      this.proceduresList = res;
    });
  }

  goBack() {
    this._location.back();
  }

}

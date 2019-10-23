import {Component, Input, OnInit} from '@angular/core';
import {UrlHelperService} from '../../helpers/url-helper.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  @Input() categoryList: any;

  constructor(public urlHelperService: UrlHelperService) {}

  ngOnInit() {
  }

}

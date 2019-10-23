import {Component, Input, OnInit} from '@angular/core';
import {UrlHelperService} from '../../helpers/url-helper.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {
  @Input() category: any;

  constructor(public urlHelperService: UrlHelperService) { }

  ngOnInit() {
  }

}

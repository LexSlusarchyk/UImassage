import {Component, Input, OnInit} from '@angular/core';
import {UrlHelperService} from '../../helpers/url-helper.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  @Input() editable?: boolean;
  @Input() itemsList: any;

  constructor(private urlHelperService: UrlHelperService) { }

  ngOnInit() {
  }

}

import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {UrlHelperService} from '../../helpers/url-helper.service';
import {CyrillicToTranslitService} from '../../helpers/cyrillic-to-translit.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryListComponent implements OnInit {
  @Input() categoryList: any;

  constructor(public urlHelperService: UrlHelperService,
              public cyrillicToTranslitService: CyrillicToTranslitService) {}

  ngOnInit() {
  }

  trackByFn(index, item): number {
    return item.id;
  }

}

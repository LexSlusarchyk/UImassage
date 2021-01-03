import {Component, Input, OnInit} from '@angular/core';
import {UrlHelperService} from '../../helpers/url-helper.service';
import {CyrillicToTranslitService} from '../../helpers/cyrillic-to-translit.service';

@Component({
  selector: 'app-procedures-list',
  templateUrl: './procedures-list.component.html',
  styleUrls: ['./procedures-list.component.scss']
})
export class ProceduresListComponent implements OnInit {
  @Input() proceduresList: any;

  constructor(public urlHelperService: UrlHelperService,
              public cyrillicToTranslitService: CyrillicToTranslitService) { }

  ngOnInit() {
  }

}

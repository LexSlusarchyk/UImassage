import {ActivatedRoute} from '@angular/router';
import {UrlHelperService} from '../helpers/url-helper.service';

export class Procedure {
  id: number;
  title: string;
  text: string;
  image: string;
  categoryId: number;

  constructor(procedure,
              private urlHelperService: UrlHelperService) {
    this.id = procedure.id;
    this.title = procedure.title;
    this.text = procedure.text;
    this.image = procedure.image;
    this.categoryId = procedure.categoryId;
  }

}

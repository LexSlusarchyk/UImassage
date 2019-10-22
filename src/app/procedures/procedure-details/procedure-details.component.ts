import { Component, OnInit } from '@angular/core';
import {Procedure} from '../procedure';
import {ActivatedRoute} from '@angular/router';
import {UrlHelperService} from '../../helpers/url-helper.service';
import {Location} from '@angular/common';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-procedure-details',
  templateUrl: './procedure-details.component.html',
  styleUrls: ['./procedure-details.component.scss']
})
export class ProcedureDetailsComponent implements OnInit {
  procedure: Procedure;
  safeSrc: SafeResourceUrl;

  constructor(private route: ActivatedRoute,
              private urlHelperService: UrlHelperService,
              private _location: Location,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { procedure: Procedure }) => {
        this.procedure = data.procedure[0];

        if (this.procedure.videoUrl) {
          this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.getEmbedYoutubeUrl(this.procedure.videoUrl));
        }
      });

  }

  getEmbedYoutubeUrl(url) {
    const videoId = this.getVideoIdFromUrl(url);
    const embedUrl = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&controls=0&rel=0&mute=1&loop=1&playlist=' + videoId;

    return embedUrl;
  }

  getVideoIdFromUrl(url): string {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {

      return match[2];
    } else {
      // error
    }
  }
  goBack() {
    this._location.back();
  }

}

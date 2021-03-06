import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { EnrollModalService } from '../enrollment/enroll-modal/enroll-modal.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  constructor(private enrollModalService: EnrollModalService) { }

  ngOnInit() {
  }

  showEnrollModal(): void {
    this.enrollModalService.showEnrollModal();
  }
}

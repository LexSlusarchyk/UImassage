import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {EmployeesService} from './employees.service';
import {LanguageService} from '../helpers/language.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesComponent implements OnInit {
  items = null;

  constructor(private employeesService: EmployeesService,
              private languageService: LanguageService,
              private cdr: ChangeDetectorRef) {

    this.employeesService.employeesUpdated$.subscribe(() => {
      this.loadItemsList();
    });
  }

  ngOnInit() {
    this.loadItemsList();
  }

  loadItemsList() {
    this.employeesService.getItems().subscribe((response) => {
      this.items = this.languageService.translateItems(response);
      this.cdr.detectChanges();
    });
  }
}

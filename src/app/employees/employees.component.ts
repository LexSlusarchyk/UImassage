import { Component, OnInit } from '@angular/core';
import {EmployeesService} from './employees.service';
import {LanguageService} from '../helpers/language.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  items = null;

  constructor(private employeesService: EmployeesService,
              private languageService: LanguageService) {

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
    });
  }

  deleteItem(id) {
    this.employeesService.deleteItem(id);
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {ProceduresService} from '../../procedures/procedures.service';

@Component({
  selector: 'app-price-accordion',
  templateUrl: './price-accordion.component.html',
  styleUrls: ['./price-accordion.component.scss']
})
export class PriceAccordionComponent implements OnInit {
  @Input() category: any;
  dataSource;
  proceduresList;
  displayedColumns: string[] = ['title', 'duration', 'price'];

  constructor(private proceduresService: ProceduresService) { }

  ngOnInit() {
  }

  getProceduresListByCategory(categoryId) {
    this.proceduresService.getProceduresByCategoryId(categoryId).then( (res) => {
      this.proceduresList = res;
    });
  }

  openExpansionPanel(categoryId) {
    this.getProceduresListByCategory(categoryId);
  }
}

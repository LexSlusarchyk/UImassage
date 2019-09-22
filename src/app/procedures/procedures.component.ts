import {Component, Input, OnInit} from '@angular/core';
import {ProceduresService} from './procedures.service';
import {FileUploadService} from '../dashboard/file-uploader/file-upload.service';
import {CreateProcedureModalComponent} from '../dashboard/modals/create-procedure-modal/create-procedure-modal.component';
import {MatDialog} from '@angular/material';
import {CategoriesService} from '../categories/categories.service';

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.scss']
})
export class ProceduresComponent implements OnInit {
  procedures = null;
  selectedCategory: {
    id: number
  };

  constructor(private proceduresService: ProceduresService,
              private fileUploadService: FileUploadService,
              private categoriesService: CategoriesService,
              public dialog: MatDialog) {

    this.proceduresService.proceduresUpdated$.subscribe(() => {
      this.loadProcedures();
    });

    this.categoriesService.selectedCategory$.subscribe((category) => {
      this.onCategorySelected(category);
    });
  }

  ngOnInit() {
    this.loadProcedures();
  }

  loadProcedures() {
    this.proceduresService.getProcedures().then((response) => {
      this.procedures = this.mapProcedureList(response);
    });
  }

  onCategorySelected(category) {
    this.proceduresService.getProceduresByCategoryId(category.id).then((response) => {
      this.procedures = this.mapProcedureList(response);
    });
  }

  mapProcedureList(list) {
    const procedureList = [];

    list.map((procedure) => {
      if (procedure.image) {
        procedure.image = this.fileUploadService.getFileUrl(procedure.image);
      }
      procedureList.push(procedure);
    });
    return procedureList;
  }

  editProcedure(procedure) {
    this.showEditProcedureModal(procedure);
  }

  deleteProcedure(id) {
    this.proceduresService.deleteProcedure(id);
  }

  showEditProcedureModal(procedure) {
    const dialogRef = this.dialog.open(CreateProcedureModalComponent, {
      width: '900px',
      data: { procedure: procedure },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

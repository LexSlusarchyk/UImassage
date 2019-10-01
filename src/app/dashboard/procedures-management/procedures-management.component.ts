import { Component, OnInit } from '@angular/core';
import { CreateProcedureModalComponent } from '../modals/create-procedure-modal/create-procedure-modal.component';
import { MatDialog } from '@angular/material/dialog';
import {ProceduresService} from '../../procedures/procedures.service';
import {FileUploadService} from '../file-uploader/file-upload.service';
import {CategoriesService} from '../../categories/categories.service';

@Component({
  selector: 'app-procedures-management',
  templateUrl: './procedures-management.component.html',
  styleUrls: ['./procedures-management.component.scss']
})
export class ProceduresManagementComponent implements OnInit {
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

  addProcedure() {
    this.showCreateProcedureModal();
  }

  showCreateProcedureModal() {
    const dialogRef = this.dialog.open(CreateProcedureModalComponent, {
      width: '900px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  loadProcedures() {
    this.proceduresService.getProcedures().then((response) => {
      this.procedures = response;
    });
  }

  onCategorySelected(category) {
    this.proceduresService.getProceduresByCategoryId(category.id).then((response) => {
      this.procedures = response;
    });
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

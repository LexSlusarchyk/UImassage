import { Component, OnInit } from '@angular/core';
import {Procedure} from '../../../procedures/procedure';
import {ActivatedRoute, Router} from '@angular/router';
import {UrlHelperService} from '../../../helpers/url-helper.service';
import {Location} from '@angular/common';
import {ProceduresService} from '../../../procedures/procedures.service';
import {FormControl, FormGroup} from '@angular/forms';
import {FileUploadService} from '../../file-uploader/file-upload.service';
import {CategoriesService} from '../../../categories/categories.service';

@Component({
  selector: 'app-edit-procedure',
  templateUrl: './edit-procedure.component.html',
  styleUrls: ['./edit-procedure.component.scss']
})
export class EditProcedureComponent implements OnInit {
  categoryTree;

  isNew = false;
  id: string;
  procedure: Procedure;
  xpandStatus = false;
  procedureForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    titleEn: new FormControl(''),
    duration: new FormControl(''),
    price: new FormControl(''),
    videoUrl: new FormControl(''),
  });

  fileUrl: string;
  selectedCategory: any;
  cropperHidden = true;

  constructor(private proceduresService: ProceduresService,
              private route: ActivatedRoute,
              private router: Router,
              private urlHelperService: UrlHelperService,
              private _location: Location,
              private fileUploadService: FileUploadService,
              private categoriesService: CategoriesService) {

    this.procedure = new Procedure();

    this.proceduresService.proceduresUpdated$.subscribe(() => {
      this.router.navigate(['/dashboard/procedures-management']).then();
    });
    this.fileUploadService.fileUploaded$.subscribe((res) => {
      this.fileUrl = res;
      this.cropperHidden = true;
    });

    this.categoriesService.selectedCategory$.subscribe((category) => {
      this.selectedCategory = category;
      this.xpandStatus = false;
    });
  }

  ngOnInit() {
    this.loadCategoriesTree();
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id === 'new') {
      this.isNew = true;
    } else {
      this.proceduresService.getProcedure(this.id).then(procedure => {
        this.procedure.init(procedure);
        this.setProcedureFields();
      });
    }
  }

  loadCategoriesTree(): void {
    this.categoriesService.getCategoriesTree().subscribe((categoriesTree: any) => {
      this.categoryTree = categoriesTree;
    });
  }

  toggleCropper(): void {
    this.cropperHidden = !this.cropperHidden;
  }

  getCategoryTitle() {
    return this.selectedCategory && this.selectedCategory.title;
  }

  setCategory() {
    this.categoriesService.getItem(this.procedure.category_id).then(category => {
      this.selectedCategory = category[0];
    });
  }

  confirm() {
    this.isNew ? this.addProcedure() : this.editProcedure();
  }

  addProcedure() {
    this.proceduresService.addProcedure(this.getProcedure());
  }

  editProcedure() {
    this.proceduresService.updateProcedure(this.getProcedure());
  }

  setProcedureFields() {
    this.fileUploadService.setFileUrl(this.procedure.image);
    this.procedureForm.patchValue({
      title: this.procedure.title,
      titleEn: this.procedure.titleEn,
      duration: this.procedure.duration,
      price: this.procedure.price,
      videoUrl: this.procedure.videoUrl,
    });
    this.setCategory();
  }

  getProcedure() {
    return {
      id: this.isNew ? null : this.procedure.id,
      title: this.procedureForm.get('title').value,
      titleEn: this.procedureForm.get('titleEn').value,
      duration: this.procedureForm.get('duration').value,
      price: this.procedureForm.get('price').value,
      videoUrl: this.procedureForm.get('videoUrl').value,
      text: this.procedure.text,
      textEn: this.procedure.textEn,
      image: this.fileUrl ? this.fileUrl : null,
      category_id: this.getCategoryId()
    };
  }

  getCategoryId() {
    return this.selectedCategory && this.selectedCategory.id || this.procedure && this.procedure.category_id || 1;
  }

  deleteProcedure(id) {
    this.proceduresService.deleteProcedure(id);
  }
}

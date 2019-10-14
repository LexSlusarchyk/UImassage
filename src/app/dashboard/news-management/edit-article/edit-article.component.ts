import {Component, OnInit, ViewChild} from '@angular/core';
import {Procedure} from '../../../procedures/procedure';
import {ActivatedRoute, Router} from '@angular/router';
import {UrlHelperService} from '../../../helpers/url-helper.service';
import {Location} from '@angular/common';
import {FormControl, FormGroup} from '@angular/forms';
import {FileUploadService} from '../../file-uploader/file-upload.service';
import {NewsService} from '../../../news/news.service';
import {EditorService} from '../../editor/editor.service';
import {ImgCropperComponent} from '../../img-cropper/img-cropper.component';


@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {
  isNew = false;
  id: string;
  procedure: Procedure;
  fileUrl: string;
  cropperHidden = true;

  procedureForm: FormGroup = new FormGroup({
    title: new FormControl('')
  });


  @ViewChild(ImgCropperComponent, {static: false}) imageCropper: ImgCropperComponent;

  constructor(private newsService: NewsService,
              private route: ActivatedRoute,
              private router: Router,
              private urlHelperService: UrlHelperService,
              private _location: Location,
              private fileUploadService: FileUploadService,
                        private editorService: EditorService) {

    this.newsService.newsUpdated$.subscribe(() => {
      this.router.navigate(['/dashboard/news-management']).then();
    });
    this.fileUploadService.fileUploaded$.subscribe((res) => {
      this.fileUrl = res;
      this.cropperHidden = true;
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id === 'new') {
      this.isNew = true;
    } else {
      this.newsService.getItem(this.id).then(procedure => {
        this.procedure = new Procedure(procedure[0]);
        this.setProcedureFields();
        this.editorService.setInitialHtmlText(this.procedure.text);
      });
    }
  }

  toggleCropper(): void {
    this.cropperHidden = !this.cropperHidden;
  }

  confirm() {
    this.isNew ? this.addProcedure() : this.editProcedure();
  }

  addProcedure() {
    this.newsService.addItem(this.getProcedure());
  }

  editProcedure() {
    this.newsService.updateItem(this.getProcedure());
  }

  setProcedureFields() {
    this.fileUploadService.setFileUrl(this.procedure.image);
    this.procedureForm.patchValue({
      title: this.procedure.title
    });
  }

  getProcedure() {
    return {
      id: this.isNew ? null : this.procedure.id,
      title: this.procedureForm.get('title').value,
      text: this.editorService.getHtmlText(),
      image: this.fileUrl ? this.fileUrl : null,
    };
  }

  deleteProcedure(id) {
    this.newsService.deleteItem(id);
  }
}

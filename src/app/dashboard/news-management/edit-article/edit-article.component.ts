import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UrlHelperService} from '../../../helpers/url-helper.service';
import {Location} from '@angular/common';
import {FormControl, FormGroup} from '@angular/forms';
import {FileUploadService} from '../../file-uploader/file-upload.service';
import {NewsService} from '../../../news/news.service';
import {ImgCropperComponent} from '../../img-cropper/img-cropper.component';
import {Article} from '../../../news/article';


@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {
  isNew = false;
  id: string;
  article: Article;
  fileUrl: string;
  cropperHidden = true;

  articleForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    titleEn: new FormControl('')
  });


  @ViewChild(ImgCropperComponent, {static: false}) imageCropper: ImgCropperComponent;

  constructor(private newsService: NewsService,
              private route: ActivatedRoute,
              private router: Router,
              private urlHelperService: UrlHelperService,
              private _location: Location,
              private fileUploadService: FileUploadService) {

    this.article = new Article();
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
      this.newsService.getItem(this.id).then(article => {
        this.article.init(article);
        this.setArticleFields();
      });
    }
  }

  toggleCropper(): void {
    this.cropperHidden = !this.cropperHidden;
  }

  confirm() {
    this.isNew ? this.addArticle() : this.editArticle();
  }

  addArticle() {
    this.newsService.addItem(this.getArticle());
  }

  editArticle() {
    this.newsService.updateItem(this.getArticle());
  }

  setArticleFields() {
    this.fileUploadService.setFileUrl(this.article.image);
    this.articleForm.patchValue({
      title: this.article.title,
      titleEn: this.article.titleEn,
    });
  }

  getArticle() {
    return {
      id: this.isNew ? null : this.article.id,
      title: this.articleForm.get('title').value,
      titleEn: this.articleForm.get('titleEn').value,
      text: this.article.text,
      textEn: this.article.textEn,
      image: this.fileUrl ? this.fileUrl : null,
    };
  }

  deleteArticle(id) {
    this.newsService.deleteItem(id);
  }
}

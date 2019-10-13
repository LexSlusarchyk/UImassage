import {Component, Input, OnInit} from '@angular/core';
import {EditorService} from './editor.service';
import {FileUploadService} from '../file-uploader/file-upload.service';
import {UrlHelperService} from '../../helpers/url-helper.service';
import * as QuillNamespace from 'quill';
const Quill: any = QuillNamespace;
import ImageResize from 'quill-image-resize-module';
Quill.register('modules/imageResize', ImageResize);

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  initialHtmlText = '';
  quillEditorRef;
  maxUploadFileSize = 1000000;

  config = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['code-block'],
        [{'header': 1}, {'header': 2}],               // custom button values
        [{'list': 'ordered'}, {'list': 'bullet'}],
        [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
        [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
        [{'direction': 'rtl'}],                         // text direction
        [{'header': [1, 2, 3, 4, 5, 6, false]}],
        [{ 'color': [] }, { 'background': [] }],
        [{'align': []}],
        [{ 'font': [] }],
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        ['clean'],                                         // remove formatting button
        ['link', 'image', 'video']
      ]
    },
    imageResize: true
  };
  constructor(private editorService: EditorService,
              private fileUploadService: FileUploadService,
              private urlHelper: UrlHelperService) {
    this.editorService.initialHtmlText$.subscribe((res) => {
      this.initialHtmlText = res;
    });
  }

  ngOnInit() {
  }

  getEditorInstance(editorInstance: any) {
    this.quillEditorRef = editorInstance;
    const toolbar = editorInstance.getModule('toolbar');
    toolbar.addHandler('image', this.imageHandler);
  }

  imageHandler = (image, callback) => {
    const _this = this;
    const input = <HTMLInputElement> document.getElementById('fileInputField');
    document.getElementById('fileInputField').onchange = () => {
      let file: File;
      file = input.files[0];

      // file type is only image.
      if (/^image\//.test(file.type)) {
        if (file.size > this.maxUploadFileSize) {
          alert('Image needs to be less than 1MB');
        } else {
          _this.fileUploadService.uploadImage(file).then(res => {
            const imageName = res.toString();
            const imageUrl = _this.urlHelper.getImageUrl(imageName);
            const img = '<img style="width: 100%;" src="' + imageUrl + '" />';

            const range = this.quillEditorRef.getSelection();
            this.quillEditorRef.clipboard.dangerouslyPasteHTML(range.index, img);
          });
        }
      } else {
        alert('You could only upload images.');
      }
    };

    input.click();
  }

  onContentChanged(event) {
    this.editorService.setHtmlText(event.html);
  }

}

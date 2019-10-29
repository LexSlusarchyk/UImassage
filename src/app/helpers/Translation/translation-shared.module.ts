import { NgModule } from '@angular/core';
import {TranslateLoader, TranslateModule, TranslateStore} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';
import {CommonModule} from '@angular/common';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}




@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      },
      isolate: false
    }),
  ],
  declarations: [
  ],
  providers: [],
  exports: [
    TranslateModule
  ]
})
export class TranslationSharedModule {}

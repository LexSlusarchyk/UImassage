import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {MarkupContainerComponent} from './markup-container/markup-container.component';




@NgModule({
  imports: [
    // CommonModule,
  ],
  declarations: [
    MarkupContainerComponent
  ],
  exports: [
    MarkupContainerComponent
  ]
})
export class LayoutModule {}

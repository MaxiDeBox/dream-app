import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropDirective } from './directives/drag-drop.directive';

const declarations: any[] = [
  DragDropDirective
];

@NgModule({
  declarations: [
    ...declarations,

  ],
  providers: [],
  imports: [
    CommonModule,
  ],
  exports: [
    ...declarations
  ],
  entryComponents: []
})
export class SharedModule { }

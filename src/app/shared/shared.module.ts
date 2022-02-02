import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropDirective } from './directives/drag-drop.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExapmleBoldDirective } from './directives/exapmle-bold.directive';

const declarations: any[] = [
  DragDropDirective,
  ExapmleBoldDirective,
];

@NgModule({
  declarations: [
    ...declarations,
    ExapmleBoldDirective,

  ],
  providers: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ...declarations
  ],
  entryComponents: []
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropDirective } from './directives/drag-drop.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExapmleBoldDirective } from './directives/exapmle-bold.directive';
import { TabsComponent } from './components/tabs/tabs/tabs.component';
import { TabComponent } from './components/tabs/tab/tab.component';

const declarations: any[] = [
  DragDropDirective,
  ExapmleBoldDirective,
];

@NgModule({
  declarations: [
    ...declarations,
    ExapmleBoldDirective,
    TabsComponent,
    TabComponent,
  ],
  providers: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ...declarations,
    TabsComponent,
    TabComponent,
  ],
  entryComponents: []
})
export class SharedModule { }

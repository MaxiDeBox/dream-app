import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropDirective } from './directives/drag-drop.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExapmleBoldDirective } from './directives/exapmle-bold.directive';
import { TabsComponent } from './components/tabs/tabs/tabs.component';
import { TabComponent } from './components/tabs/tab/tab.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

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
    MatSidenavModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ...declarations,
    TabsComponent,
    TabComponent,
    MatSidenavModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule
  ],
  entryComponents: []
})
export class SharedModule { }

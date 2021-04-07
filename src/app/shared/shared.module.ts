import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const declarations: any[] = [

];

@NgModule({
  declarations: [
    ...declarations
  ],
  providers: [],
  imports: [
    CommonModule,
    ...declarations
  ],
  exports: [
    ...declarations
  ],
  entryComponents: []
})
export class SharedModule { }

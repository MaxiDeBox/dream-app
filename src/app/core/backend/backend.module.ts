import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GalleryService } from './gallery/gallery.service';

const declarations: any[] = [
];

@NgModule({
  declarations: [
    ...declarations
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    GalleryService
  ],
  exports: [
    ...declarations
  ]
})
export class BackendModule { }

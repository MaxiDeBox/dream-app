import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendModule } from './backend/backend.module';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BackendModule
  ],
  providers: []
})
export class CoreModule { }

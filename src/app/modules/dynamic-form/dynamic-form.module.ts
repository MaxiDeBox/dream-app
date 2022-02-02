import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicFormRoutingModule } from './dynamic-form-routing.module';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    DynamicFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DynamicFormRoutingModule,
  ]
})
export class DynamicFormModule { }

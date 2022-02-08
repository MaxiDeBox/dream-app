import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './containers/main-page/main-page.component';
import { SharedModule } from '../../shared/shared.module';
import { MainTabsComponent } from './controllers/main-tabs/main-tabs.component';


@NgModule({
  declarations: [
    MainPageComponent,
    MainTabsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule
  ]
})
export class MainModule { }

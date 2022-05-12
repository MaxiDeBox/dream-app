import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoNgrxRoutingModule } from './todo-ngrx-routing.module';
import { TodoNgrxMainComponent } from './components/todo-ngrx-main/todo-ngrx-main.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    TodoNgrxMainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TodoNgrxRoutingModule
  ]
})
export class TodoNgrxModule { }

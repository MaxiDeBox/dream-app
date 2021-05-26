import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoNgrxRoutingModule } from './todo-ngrx-routing.module';
import { TodoNgrxMainComponent } from './components/todo-ngrx-main/todo-ngrx-main.component';


@NgModule({
  declarations: [
    TodoNgrxMainComponent
  ],
  imports: [
    CommonModule,
    TodoNgrxRoutingModule
  ]
})
export class TodoNgrxModule { }

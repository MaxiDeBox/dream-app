import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoNgrxMainComponent } from './components/todo-ngrx-main/todo-ngrx-main.component';

const routes: Routes = [
  {
    path: '',
    component: TodoNgrxMainComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoNgrxRoutingModule { }

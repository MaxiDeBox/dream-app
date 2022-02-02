import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormRoutingModule } from './modules/dynamic-form/dynamic-form-routing.module';
import { DynamicFormModule } from './modules/dynamic-form/dynamic-form.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => {
      return import('./modules/main/main.module').then((module) => module.MainModule);
    }
  },
  {
    path: 'gallery',
    loadChildren: () => {
      return import('./modules/gallery/gallery.module').then((module) => module.GalleryModule);
    }
  },
  {
    path: 'todo-ngrx',
    loadChildren: () => {
      return import('./modules/todo-ngrx/todo-ngrx.module').then((module) => module.TodoNgrxModule);
    }
  },
  {
    path: 'dynamic-form',
    loadChildren: () => {
      return import('./modules/dynamic-form/dynamic-form.module').then((module) => module.DynamicFormModule);
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

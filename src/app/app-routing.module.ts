import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';

import { MoviesComponent }   from '../movies/movies.component';


const appRoutes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: '',   redirectTo: '/movies', pathMatch: 'full' },
  { path: '**', component: MoviesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRouterModule { }

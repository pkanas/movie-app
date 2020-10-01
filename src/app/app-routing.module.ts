import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';


const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'movies',
    loadChildren: () => import('./components/movies/movies.module').then(mod => mod.MoviesModule)
  },

  {
    path: 'movies/:id', loadChildren: () => import('./components/movie-details/movie-details.module').then(mod => mod.MovieDetailsModule)
  },

  {
    path: 'genres/:id/:name',
    loadChildren: () => import('./components/genre/genre.module').then(mod => mod.GenreModule)
  },

  {
    path: 'genres',
    loadChildren: () => import('./components/genre-list/genre-list.module').then(mod => mod.GenreListModule)
  },

  {
    path: 'person/:id',
    loadChildren: () => import('./components/person/person.module').then(mod => mod.PersonModule)
  },

  {
    path: '**',
    redirectTo: 'movies'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

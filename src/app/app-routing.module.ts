import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { MoviesComponent } from './movies/movies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { StartPageComponent } from './start-page/start-page.component';

const routes: Routes = [
  { path: '', redirectTo:'/start-page',pathMatch:'full'},
  { path: 'start-page', component: StartPageComponent},
  { path: 'dashboard', component: DashboardComponent},
   { path: 'films-detail/:id', component: MovieDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

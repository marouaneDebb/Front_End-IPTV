import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [{
  path: '',
  component: HomePageComponent,
  title: 'Home page'
},{
  path: 'details/:id',
  component: MovieDetailsComponent,
  title: 'details'
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

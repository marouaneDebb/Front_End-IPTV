import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FavoritePageComponent } from './favorite-page/favorite-page.component';
import { SignFormsComponent } from './sign-forms/sign-forms.component';

const routes: Routes = [{
  path: '',
  component: SignFormsComponent,
  title: 'authenticate'
},{
  path: 'home/:username',
  component: HomePageComponent,
  title: 'Home page'
},{
  path: 'details/:id/:username',
  component: MovieDetailsComponent,
  title: 'details'
},{
  path: 'favorites/:username',
  component: FavoritePageComponent,
  title: 'favorites'
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

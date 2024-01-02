import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MovieCartComponent } from './movie-cart/movie-cart.component';
import { SerchBarComponent } from './serch-bar/serch-bar.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RouterModule } from '@angular/router';
import { NaveBarComponent } from './nave-bar/nave-bar.component';
import { FavoritePageComponent } from './favorite-page/favorite-page.component';
import { SignFormsComponent } from './sign-forms/sign-forms.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MovieCartComponent,
    SerchBarComponent,
    MovieDetailsComponent,
    NaveBarComponent,
    FavoritePageComponent,
    SignFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

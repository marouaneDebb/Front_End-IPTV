import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavoriteMovieBack } from 'src/models/favoriteBack';
import { FavoriteService } from 'src/service/favorite.service';
import { movieservice } from './../../service/movie.service';
import { MovieDetail } from 'src/models/movieDetails';
import { Movie } from 'src/models/movie';


@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']

})
export class FavoritePageComponent implements OnInit{

  searchedMovie: string = "";
  searchedMovieList!: Movie[];

  favorites: FavoriteMovieBack[] = [];
  movieDetailList!: MovieDetail[];
  movieDetail!:Movie;
  moviesList:Movie[]=[]
  username!:String

  constructor(
    private route: ActivatedRoute,
    private movieservice: movieservice, private favoriteService: FavoriteService
  ) {}
  ngOnInit(): void {
    this.searchedMovieList = this.moviesList
    this.route.params.subscribe((params) => {
      this.username = params['username'];})
      this.getAllFavoritesFromBackend();


  }

  getAllFavoritesFromBackend(){
    console.log("this is the username from favorite page "+ this.username)
    this.favoriteService.getAllFavorites(this.username).subscribe(
      (response: FavoriteMovieBack[]) => {
        this.favorites=response;
        this.getAllMovieDetail(this.favorites)

        console.log("getting favorites from backend")
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }
  getAllMovieDetail(favorites:FavoriteMovieBack[]){
    favorites.forEach((favorite) => {
      this.movieservice.getDetailMv(favorite.movieID).subscribe((data) => {
        this.movieDetail = data;
        console.log(this.movieDetail.original_title)
        this.moviesList.push(this.movieDetail)
        console.log("this is "+this.moviesList)

      });
    })
    console.log("this is "+this.moviesList)


  }
  onSearchMovieChange(searchedMovie: string) {
    this.searchedMovie = searchedMovie;
    this.searchedMovieFnc(searchedMovie)
    console.log(this.searchedMovieList);

  }
  searchedMovieFnc(title:String){
    if(!title){
      this.searchedMovieList=this.moviesList;
    }
    else{
      this.searchedMovieList=this.moviesList.filter(movie=>movie.title.toLowerCase().includes(title.toLowerCase()))
    }
  }


}

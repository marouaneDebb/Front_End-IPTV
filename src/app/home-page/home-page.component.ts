import { Component, OnInit } from '@angular/core';
import { movieservice } from './../../service/movie.service';
import { Movie } from 'src/models/movie';
import { FavoriteMovie } from 'src/models/favorite';
import { FavoriteService } from 'src/service/favorite.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  searchedMovie: string = "";
  movies!: Movie[];
  searchedMovieList!: Movie[];
  favoriteMovie!: FavoriteMovie;


  constructor(private movieservice: movieservice,private favoriteService: FavoriteService) {
    this.favoriteService.getFavoriteMovie().subscribe((favoriteMovie) => {
      this.favoriteMovie = favoriteMovie;
      console.log("from home page "+favoriteMovie.movieID+favoriteMovie.isFavorite)
      // Handle favorite status change as needed
    });
  }
  ngOnInit() {
    this.movieservice.getPopularMv().subscribe((data) => {
      this.movies = data.results;
      this.searchedMovieList = data.results;
      console.log(data.results);
      console.log(this.searchedMovieList);
      console.log(this.favoriteMovie.isFavorite);

    });
  }

  onSearchMovieChange(searchedMovie: string) {
    this.searchedMovie = searchedMovie;
    this.searchedMovieFnc(searchedMovie)
    console.log(this.searchedMovieList);

  }
  searchedMovieFnc(title:String){
    if(!title){
      this.searchedMovieList=this.movies;
    }
    else{
      this.searchedMovieList=this.movies.filter(movie=>movie.title.toLowerCase().includes(title.toLowerCase()))
    }
  }
}

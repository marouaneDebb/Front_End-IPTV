import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/models/movie';
import { movieservice } from './../../service/movie.service';
import { MovieDetail } from 'src/models/movieDetails';
import { Comment } from 'src/models/comment';
import { FavoriteMovie } from 'src/models/favorite';
import { FavoriteService } from 'src/service/favorite.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  selectedMovie!: MovieDetail;
  constructor(
    private route: ActivatedRoute,
    private movieservice: movieservice, private favoriteService: FavoriteService
  ) {}
  commentText: String = '';
  comments: Comment[] = [];
  favoritemovie!:FavoriteMovie;

  isFavorite!: boolean;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const movieId = params['id'];
      this.movieservice.getDetailMv(movieId).subscribe((data) => {
        this.selectedMovie = data;
      });
      console.log(
        'from detail movie comp' + this.selectedMovie?.original_title
      );
      console.log('from detail movie comp movieid ' + movieId);
      this.favoriteService.getFavoriteMovie().subscribe((favoriteMovie) => {
        console.log("from onItfunc "+favoriteMovie.movieID+" and it's "+favoriteMovie.isFavorite)
        console.log('###########################')
        this.isFavorite = favoriteMovie.movieID == movieId && favoriteMovie.isFavorite;

      });
    });
    
  }
  addComment() {
    const localDate: String = new Date().toLocaleString();
    if(this.commentText!=""){const newComment: Comment = {
      comment_Text: this.commentText,
      comment_Date: localDate,
    };
    this.comments.push(newComment);
    this.commentText = '';
    console.log(this.comments);}
    
  }

  addFavorie() {
    this.isFavorite = !this.isFavorite;
    const favoritemovie: FavoriteMovie = { movieID: this.selectedMovie.id, isFavorite: this.isFavorite };
    this.favoriteService.updateFavoriteMovie(favoritemovie);
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/models/movie';
@Component({
  selector: 'app-movie-cart',
  templateUrl: './movie-cart.component.html',
  styleUrls: ['./movie-cart.component.css']
})
export class MovieCartComponent implements OnInit {

  constructor(private router: Router) {}
  @Input() movie!: Movie;
  @Input() username!: String;

  @Output() selectedMovieEmit = new EventEmitter<Movie>();
  ngOnInit() {
    
  }

  selectMovie(){
    this.selectedMovieEmit.emit(this.movie);
    console.log(this.movie.id,this.username)
    this.router.navigate(['/details', this.movie.id,this.username]);

  console.log("selected movie"+this.movie.title) }
}

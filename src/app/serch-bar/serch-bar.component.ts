import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-serch-bar',
  templateUrl: './serch-bar.component.html',
  styleUrls: ['./serch-bar.component.css']
})
export class SerchBarComponent implements OnInit {
  @Output() searchedMovieChange = new EventEmitter<string>();
  searchedMovie: string = "";

  ngOnInit() {
  }

  onSearchChange() {
    this.searchedMovieChange.emit(this.searchedMovie);
    console.log("from bar"+this.searchedMovie)
  }
}

// favorite.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FavoriteMovie } from 'src/models/favorite';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private favoriteMovieSubject = new BehaviorSubject<FavoriteMovie>({ movieID: 0, isFavorite: false });
  favoriteMovie$ = this.favoriteMovieSubject.asObservable();

  updateFavoriteMovie(favoriteMovie: FavoriteMovie) {
    this.favoriteMovieSubject.next(favoriteMovie);
  }

  getFavoriteMovie(): Observable<FavoriteMovie> {
    return this.favoriteMovie$;
  }
}

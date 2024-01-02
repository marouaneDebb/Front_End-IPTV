import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { FavoriteMovie } from "src/models/favorite";
import { FavoriteMovieBack } from "src/models/favoriteBack";

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private favoriteMovieSubject = new BehaviorSubject<FavoriteMovie>({ movieID: 0, isFavorite: false });
  favoriteMovie$ = this.favoriteMovieSubject.asObservable();

  constructor(private http: HttpClient) {}

  updateFavoriteMovie(favoriteMovie: FavoriteMovie) {
    this.favoriteMovieSubject.next(favoriteMovie);
  }

  getFavoriteMovie(): Observable<FavoriteMovie> {
    return this.favoriteMovie$;
  }

  addFavorite(FavoriteBack:FavoriteMovieBack):Observable<FavoriteMovieBack>{
    return this.http.post<FavoriteMovieBack>(`http://localhost:8080/favorites/add`, FavoriteBack)
  }

  getFavoriteByMovieID(movieID: number): Observable<FavoriteMovieBack> {
    // const url = `http://localhost:8080/favorites/get/${movieID}`;
    return this.http.get<FavoriteMovieBack>(`http://localhost:8080/favorites/favorite/${movieID}`)
  }

  // Add method to delete favorite by movieID

  deleteFavoriteByMovieID(movieID: number): Observable<any> {
    const url = `http://localhost:8080/favorites/delete/${movieID}`;
    return this.http.delete(url);
  }
  getAllFavorites():Observable<FavoriteMovieBack[]>{
    return this.http.get<FavoriteMovieBack[]>(`http://localhost:8080/favorites/all`)
  }
}

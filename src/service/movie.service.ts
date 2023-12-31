import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class movieservice {
  API_TOKEN: any = 'b424100a192da200f90d6caeb63f3eb4';

  apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getPopularMv(): Observable<any> {
    const url = `${this.apiUrl}/movie/popular?api_key=${this.API_TOKEN}`;
    return this.http.get(url);
  }
  serarchMovie(text: String, page: number): Observable<any> {
    const url = `${this.apiUrl}search/movie?api_key=${this.API_TOKEN}&language=fr&query=${text}&page=${page}`;
    return this.http.get(url);
  }
  getMoviePoster(posterPath: String): Observable<any> {
    const url = `https://image.tmdb.org/t/p/w300/${posterPath}`;
    return this.http.get(url);
  }
  getDetailMv(id: number): Observable<any> {
    const url = `${this.apiUrl}/movie/${id}?api_key=${this.API_TOKEN}&language=fr`;
    return this.http.get(url);
  }
}

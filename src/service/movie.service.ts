import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/models/comment';


@Injectable({
  providedIn: 'root',
})
export class movieservice {
  API_TOKEN: any = 'b424100a192da200f90d6caeb63f3eb4';

  apiUrl = 'https://api.themoviedb.org/3';

  apiBackendUrl= 'http://localhost:8080';

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
  addComments(comment:Comment):Observable<Comment>{
    return this.http.post<Comment>(`${this.apiBackendUrl}/detail/add`, comment)
  }
  getComment(movieID:number):Observable<Comment[]>{
    const url =`${this.apiBackendUrl}/detail/comment/${movieID}`

    return this.http.get<Comment[]>(url)
  }
  getAllComment():Observable<Comment[]>{
    return this.http.get<Comment[]>(`${this.apiBackendUrl}/detail/comment`)
  }
}

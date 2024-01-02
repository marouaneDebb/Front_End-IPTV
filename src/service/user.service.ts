import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/models/comment';
import { User } from 'src/models/user';


@Injectable({
  providedIn: 'root',
})
export class userService {
  apiBackendUrl= 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  addUser(user:User):Observable<User>{
    return this.http.post<User>(`${this.apiBackendUrl}/Users/add`, user)
  }
  getUser(username:String):Observable<User>{
    const url =`${this.apiBackendUrl}/Users/find/${username}`
    return this.http.get<User>(url)
  }
  getAllUsers():Observable<User[]>{
    const url =`${this.apiBackendUrl}/Users/all`
    return this.http.get<User[]>(url)
  }

  
  
}

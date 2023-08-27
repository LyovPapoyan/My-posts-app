import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private _http: HttpClient) { }

  public getPosts(): Observable<IPost[]> {
   return this._http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
  }

  public getPostById(id: string): Observable<IPost> {
    return this._http.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }

}

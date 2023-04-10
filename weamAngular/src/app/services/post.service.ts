import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IPost } from '../SharedClassesAndTypes/IPosts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IPost[]> {

    return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')

      .pipe(catchError((err) => {
        return throwError(() => err.message || "server error");
      }));
  }

  getCommentInPost(PostId: number) {

    if (!isNaN(PostId)) {
      const id = Number(PostId);
      return this.http.get(`https://jsonplaceholder.typicode.com/posts/${PostId}/comments`)
    }
    else {
      return null
    }
  }
}

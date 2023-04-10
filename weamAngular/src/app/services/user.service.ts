import { Injectable } from '@angular/core';
import { IUser } from '../SharedClassesAndTypes/IUser';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  data: IUser[] = [];
  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {

    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users')

      .pipe(catchError((err) => {
        return throwError(() => err.message || "server error");
      }));
  }
}

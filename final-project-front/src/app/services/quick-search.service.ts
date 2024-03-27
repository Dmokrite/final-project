import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../interfaces/quick-search';

@Injectable({
  providedIn: 'root',
})
export class QuickSearchService {
  baseUrl = 'http://localhost:3333/user/';
  token: string | null = localStorage.getItem('token');

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    const options = { headers };
    return this.http.get<User[]>(this.baseUrl, options);
  }
}

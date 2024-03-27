import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { User } from '../interfaces/auth';
import {
  BehaviorSubject,
  Observable,
  catchError,
  map,
  tap,
  throwError,
} from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3333';

  constructor(private http: HttpClient, private router: Router) {}

  private nicknameSubject = new BehaviorSubject<string | null>(null);
  nickname$ = this.nicknameSubject.asObservable();

  registerUser(userDetails: User) {
    return this.http.post(`${this.baseUrl}/auth/register`, userDetails);
  }

  loginUser(email: string, password: string): Observable<User> {
    return this.http
      .post<User>(`${this.baseUrl}/auth/login`, { email, password })
      .pipe(
        tap((user) => {
          try {
            localStorage.setItem('token', user.token.value);
            localStorage.setItem('isadmin', user.token.isadmin);
            localStorage.setItem('userid', user.id);
          } catch (error) {
            console.error('Error accessing token value:', error);
          }
          sessionStorage.setItem('email', user.email);
          sessionStorage.setItem('nickname', user.nickname);
        }),
        catchError((error) => {
          // Handle login errors here
          console.error('Login error:', error);
          return throwError(error);
        })
      );
  }

  getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`);
  }

  isLoggedIn(): boolean {
    // Vérifie si l'email de l'utilisateur est présent dans le sessionStorage
    return !!sessionStorage.getItem('email');
  }

  getUserNickname(): string | null {
    const nicknameFromStorage = sessionStorage.getItem('nickname');
    if (nicknameFromStorage) {
      return nicknameFromStorage;
    }
    return null;
  }

  getToken(): string | null {
    const token = localStorage.getItem('token');
    return token;
  }

  addTokenToHeaders(req: HttpRequest<any>): HttpRequest<any> {
    const token = this.getToken();
    if (token) {
      return req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`),
      });
    }
    return req;
  }
}

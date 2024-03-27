import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonalDataFull } from '../interfaces/personal-data-full';

@Injectable({
  providedIn: 'root',
})
export class UserFullProfilService {
  private apiUrl = 'http://localhost:3333/api/user/';

  constructor(private http: HttpClient) {}

  getUsersFull(): Observable<PersonalDataFull[]> {
    const token = localStorage.getItem('token');
    const idSelect = localStorage.getItem('userSelectId');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<PersonalDataFull[]>(`${this.apiUrl}${idSelect}/full`, {
      headers,
    });
  }
}

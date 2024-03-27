import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stats } from '../interfaces/stats';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatService {

  private readonly apiUrl = 'http://localhost:3333/api/admin/stats';

  constructor(private httpClient: HttpClient) {}

  getStat(): Observable<Stats> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.httpClient.get<Stats>(this.apiUrl, {
      headers
    });
  }
}

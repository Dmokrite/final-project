import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from '../pages/announces-all/announces-all.component';

@Injectable({
  providedIn: 'root',
})
export class AnnouncesService {
  log(user: any) {
    throw new Error('Method not implemented.');
  }

  base_url = 'http://localhost:3333/users';
  constructor(private httpClient: HttpClient) {}
  getUser(userId: number): Observable<UserData> {
    return this.httpClient.get<UserData>(`${this.base_url}/${userId}`);
  }

  getUsers(): Observable<UserData[]> {
    return this.httpClient.get<UserData[]>(`${this.base_url}/all`);
  }

  getCombinedUserData(id: number): Observable<UserData> {
    return this.httpClient.get<UserData>(`${this.base_url}/${id}`);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListUser } from '../interfaces/list-user';

@Injectable({
  providedIn: 'root',
})
export class UserListService {
  private apiUrl = 'http://localhost:3333/api/user';
   
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<ListUser[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<ListUser[]>(`${this.apiUrl}/all`, {
      headers,
    });
  }
  getOneUsers(id:string){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    console.log('ici je viens de service getOneUser',id);
    return this.http.get<ListUser[]>(`${this.apiUrl}/${id}`, {
      headers,
    });
  }
}

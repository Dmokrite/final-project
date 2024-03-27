import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserData } from "../pages/announces-all/announces-all.component";

@Injectable({
  providedIn: "root",
})
export class AnnouncesAllService {
  private readonly API_URL = 'http://localhost:3333/api/user/all/full';

  constructor(private http: HttpClient) {}

  getAnnouncements(): Observable<UserData[]> {
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('Missing authentication token');
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<UserData[]>(this.API_URL, { headers });
  }
}

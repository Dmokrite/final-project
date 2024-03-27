import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Announces } from '../interfaces/announces';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckAnnouncesService {


  constructor(private http:HttpClient) { }
  getAllAnnounces(): Observable<Announces[]> {
    const token = localStorage.getItem('token');
    const url = 'http://localhost:3333/api/announces'; // Replace with your actual URL
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
  
    return this.http.get<Announces[]>(url, {
      headers
    });
  }
}

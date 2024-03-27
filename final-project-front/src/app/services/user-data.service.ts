import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private readonly apiUrl = 'http://localhost:3333/api/user/';

  constructor(private httpClient: HttpClient) {}

  getPersonalData() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.httpClient.get(this.apiUrl + localStorage.getItem('userid'), {
      headers
    });
  }

  updatePersonalData(data: any): Observable<any> {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userid');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      //'Access-Control-Allow-Origin': 'http://localhost:3333'
    });
    console.log('Sending data:', data);
    return this.httpClient.patch(this.apiUrl + userId, data, { headers });
  }

}
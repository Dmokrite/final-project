import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';
interface FileInfo {
  name: string;
  url: string;
}
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private baseUrl = 'http://localhost:3333/api/user/';

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData = new FormData();
    formData.append('file', file);
  
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userid');
  
    if (!token) {
      throw new Error('Missing authentication token');
    }
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  
    const req = new HttpRequest('POST', `${this.baseUrl}${userId}/gallery`, formData, {
      reportProgress: true,
      responseType: 'json',
      headers,
    });

    
  
    //this.http.request(req);

    return this.http.request(req);
  }
  

  getFiles(): Observable<{ name: string; url: string }[]> {
    const userId = localStorage.getItem('userid');
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
  
    return this.http.get<FileInfo[]>(`${this.baseUrl}${userId}/gallery`, { headers })
    .pipe(
      // No mapping needed now, type is already inferred
    );
  }

  deleteFile(fileName: string): Observable<any> {
    const userId = localStorage.getItem('userid');
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
  
    return this.http.delete(`${this.baseUrl}${userId}/gallery/${fileName}`, { headers });
  }
}
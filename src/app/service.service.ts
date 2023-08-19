import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  baseApiUrl: any;
  constructor(private http: HttpClient) {}

  getAllArticles(): Observable<any[]> {
    const url =
      'https://api.spaceflightnewsapi.net/v4/articles/?limit=10&offset=10';
    return this.http.get<any[]>(url);
  }

  getArticleById(id: any) {
    return this.http.get<any>(
      'https://api.spaceflightnewsapi.net/v4/articles/'+ id
    );
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private readonly URL = 'https://proweb63.ru/upload';

  constructor(private http: HttpClient) { }

  getImagesList(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin' : '*',
      })
    };


    return this.http.get<any[]>(`${this.URL}/gallery-images.json`, httpOptions);
  }
}

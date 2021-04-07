import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { GalleryInterface } from './gallery.interface';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private readonly URL = 'assets/mock';

  constructor(private http: HttpClient) { }

  /**
   * Получение списка картинок
   */
  getImagesList(): Promise<GalleryInterface[]> {
    return this.http.get<GalleryInterface[]>(`${this.URL}/gallery-images.json`).toPromise();
  }
}

import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../../../core/backend/gallery/gallery.service';
import { GalleryInterface } from '../../../../core/backend/gallery/gallery.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  /**
   * Коллекиця для картинок
   */
  public collection: GalleryInterface[] = [] || null;

  constructor(private gallerySrv: GalleryService) { }

  ngOnInit(): void {
    this.init();
  }

  async init() {
    try {
      const response: any = await this.gallerySrv.getImagesList();

      this.collection = response.galleryImages;
    } catch (e) {
      console.error(e);
    }
  }
}

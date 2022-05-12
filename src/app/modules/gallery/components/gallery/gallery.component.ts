import { Component, OnInit } from '@angular/core';
import { GalleryInterface } from '../../../../core/backend/gallery/gallery.interface';
import { GalleryService } from '../../../../core/backend/gallery/gallery.service';
import { FileHandle } from '../../../../shared/directives/file-handle.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  /**
   * Коллекиця для картинок
   */
  collection: GalleryInterface[] = [] || null;
  files: any[] = [];

  activeId!: number;

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

  filesDropped(event: FileHandle[]): void {
    this.files = event;

    if (this.files.length > 0) {
      this.files.forEach((file) => {
        const img = new Image();
        const p = new Promise<void>((resolve) => {
          img.onload = () => {
            const {height: h, width: w} = img;

            this.collection.push({
              width: w,
              height: h,
              url: file.url
            });

            resolve();
          };

          img.src = file.url.changingThisBreaksApplicationSecurity;
        });
      });
    }
  }

  /**
   * Показать/скрыть мень уделения
   */
  toogleMenu(event: any, id: number): void {
    this.activeId = id;
    const isOpen = event.target.classList.contains('active');
    isOpen ? this.activeId = -1 : this.activeId = id;
  }

  /**
   * В текущей реализации удаляется из дома. Будь полноценный бэк,
   * отправлял бы запрос на удаление и обновлял бы коллекцию.
   */
  removeImage(id: number): void {
    const item: any = document.querySelector(`.item_${id}`);
    item.remove();
  }

}

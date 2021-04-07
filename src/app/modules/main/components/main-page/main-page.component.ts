import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../../../core/backend/gallery/gallery.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private gallerySrv: GalleryService) { }

  ngOnInit(): void {
    this.gallerySrv.getImagesList().subscribe((res) => {
      console.log(res);
    });
  }
}

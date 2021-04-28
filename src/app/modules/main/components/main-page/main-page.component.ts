import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../../../../core/backend/example/example.service';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public users: any[] = [];
  public isShow = false;

  public userAsync: any;

  constructor(private exapmleSrv: ExampleService) { }

  ngOnInit(): void {
    this.exapmleSrv.getUsersList().subscribe((response) => {
      this.users = response;
    }, (error) => {
      console.error(error);
    });

    this.userAsync = this.exapmleSrv.getUsersList();


    const data = of([
      {
        brand: 'porsche',
        model: '911'
      },
      {
        brand: 'porsche',
        model: 'macan'
      },
      {
        brand: 'ferarri',
        model: '458'
      },
      {
        brand: 'lamborghini',
        model: 'urus'
      }
    ]);

    data.pipe(
      map((cars: any) => cars.map((car: any) => {
        return { brand: car.brand, model: car.model, color: '#ffffff' };
      }))
    ).subscribe((response) => {
      console.log(response);
    });
  }
}


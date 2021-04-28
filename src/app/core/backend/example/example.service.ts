import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor() { }

  getUsersList(): Observable<any[]> {
    const users = [
      {
        id: 0,
        name: 'Maxim',
        age: 35,
        city: 'Samara',
        gender: 'male'
      },
      {
        id: 1,
        name: 'Nataly',
        age: 35,
        city: 'Samara',
        gender: 'famale'
      },
    ];

    return from([users]);
  }
}

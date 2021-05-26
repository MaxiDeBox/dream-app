import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { clear, countSelector, decriment, increment } from '../../../../store-ngrx/reducers/counter';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-todo-ngrx-main',
  templateUrl: './todo-ngrx-main.component.html',
  styleUrls: ['./todo-ngrx-main.component.scss']
})
export class TodoNgrxMainComponent {

  public updateAt?: number;

  count$ = this.store.select(countSelector);
  cannotDecrement$ = this.count$.pipe(map( count => count <= 0));

  constructor(private store: Store) { }

  increment() {
    this.updateAt = Date.now();
    this.store.dispatch(increment())
  }

  decrement() {
    this.updateAt = Date.now();
    this.store.dispatch(decriment())
  }

  resetCounter() {
    this.updateAt = Date.now();
    this.store.dispatch(clear());
  }
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { increment, decriment, clear, changeUpdatedAt } from './reducers/counter';
import { map } from 'rxjs/operators';

@Injectable()
export class AppEffects {
  updateAt$ = createEffect(() => this.actions$.pipe(
    ofType(increment, decriment, clear),
    map(() => changeUpdatedAt({updatedAt: Date.now()}))
  ));

  constructor(private actions$: Actions) {}
}

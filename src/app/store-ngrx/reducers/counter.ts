import { createAction, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';

export const increment = createAction('[COUNTER] increment');
export const decriment = createAction('[COUNTER] decrement');
export const clear = createAction('[COUNTER] clear');

export interface CounterState {
  count: number;
}

export const initialState: CounterState = {
  count: 0
}

export const counterReducer = createReducer(
  initialState,
  on(increment, state => ({
    ...state,
    count: state.count + 1
  })),
  on(decriment, state => ({
    ...state,
    count: state.count - 1
  })),
  on(clear, state => ({
    ...state,
    count: 0
  }))
);


export const featureSelector = createFeatureSelector<CounterState>('counter');

export const countSelector = createSelector(
  featureSelector,
  state => state.count
);

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-ngrx-main',
  templateUrl: './todo-ngrx-main.component.html',
  styleUrls: ['./todo-ngrx-main.component.scss']
})
export class TodoNgrxMainComponent {

  public counter = 0;
  public updateAt?: number;

  get cannotDecrement(): boolean {
    return this.counter <= 0;
  }

  constructor() { }

  increment() {
    this.updateAt = Date.now();
    this.counter++;
  }

  decrement() {
    this.updateAt = Date.now();
    this.counter--;
  }

  resetCounter() {
    this.updateAt = Date.now();
    this.counter = 0;
  }
}

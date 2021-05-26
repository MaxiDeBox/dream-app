import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoNgrxMainComponent } from './todo-ngrx-main.component';

describe('TodoNgrxMainComponent', () => {
  let component: TodoNgrxMainComponent;
  let fixture: ComponentFixture<TodoNgrxMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoNgrxMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoNgrxMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

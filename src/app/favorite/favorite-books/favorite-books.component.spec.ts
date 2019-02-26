import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteBooksComponent } from './favorite-books.component';

describe('FavoriteBooksComponent', () => {
  let component: FavoriteBooksComponent;
  let fixture: ComponentFixture<FavoriteBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

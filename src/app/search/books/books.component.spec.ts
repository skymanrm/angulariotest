import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksComponent } from './books.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../../material-module';
import {RouterTestingModule} from '@angular/router/testing';
import {LocalizationModule} from '../../localization-module';
import {HttpClientModule} from '@angular/common/http';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksComponent ],
      imports: [
        NoopAnimationsModule,
        MaterialModule,
        RouterTestingModule,
        LocalizationModule,
        HttpClientModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteBooksComponent } from './favorite-books.component';
import {TranslateModule} from '@ngx-translate/core';
import {MaterialModule} from '../../material-module';
import {RouterTestingModule} from '@angular/router/testing';
import {LocalizationModule} from '../../localization-module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('FavoriteBooksComponent', () => {
  let component: FavoriteBooksComponent;
  let fixture: ComponentFixture<FavoriteBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteBooksComponent ],
      imports: [
        NoopAnimationsModule,
        TranslateModule.forChild({}),
        MaterialModule,
        RouterTestingModule,
        LocalizationModule,
      ],
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

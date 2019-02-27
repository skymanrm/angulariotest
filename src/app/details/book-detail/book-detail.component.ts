import { Component, OnInit } from '@angular/core';
import {BooksService} from '../../data/services/books.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';
import {first, last, switchMap} from 'rxjs/operators';
import {MatChipInputEvent} from '@angular/material';
import {DetailsResponse} from 'src/app/data/Responses';
import {Tag} from '../../data/Tag';
import {BookLocal} from '../../data/Book';
import {LocalstorageService} from '../../data/services/localstorage.service';
import {COMMA, ENTER, SPACE} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  details$: Observable<DetailsResponse>;
  bookLocal: BookLocal;
  separatorKeysCodes: number[] = [ENTER, COMMA, SPACE];

  constructor(
    private booksService: BooksService,
    private localstorageService: LocalstorageService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.details$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.booksService.getBookDetails(params.get('key'))
      )
    );
    this.activatedRoute.paramMap.subscribe((param) => {
      this.bookLocal = this.localstorageService.getBook(param.get('key'));
    });
    this.details$.subscribe((details) => {
      this.bookLocal.key = details.bibKey;
      this.bookLocal.title = details.book.title;
    });
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.bookLocal.tags.push({name: value.trim()});
    }

    if (input) {
      input.value = '';
    }

    this.localstorageService.setBook(this.bookLocal);
  }

  remove(tag: Tag): void {
    const index = this.bookLocal.tags.indexOf(tag);

    if (index >= 0) {
      this.bookLocal.tags.splice(index, 1);
    }

    this.localstorageService.setBook(this.bookLocal);
  }
}

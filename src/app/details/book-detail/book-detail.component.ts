import {AfterViewInit, Component, OnInit} from '@angular/core';
import {BooksService} from '../../data/services/books.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {first, last, share, switchMap, tap} from 'rxjs/operators';
import {MatChipInputEvent} from '@angular/material';
import {DetailsResponse} from 'src/app/data/Responses';
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
      ),
      tap((detailsResponse: DetailsResponse) => {
        this.bookLocal = this.localstorageService.getBook(detailsResponse.bibKey);
        this.bookLocal.key = detailsResponse.bibKey;
        this.bookLocal.title = detailsResponse.book.title;
      }),
      share()
    );
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.bookLocal.tags.push(value.trim());
    }

    if (input) {
      input.value = '';
    }

    this.localstorageService.setBook(this.bookLocal);
  }

  remove(tag: string): void {
    const index = this.bookLocal.tags.indexOf(tag);

    if (index >= 0) {
      this.bookLocal.tags.splice(index, 1);
    }

    if (this.bookLocal.tags.length > 0) {
      this.localstorageService.setBook(this.bookLocal);
    } else {
      this.localstorageService.deleteBook(this.bookLocal.key);
    }
  }
}

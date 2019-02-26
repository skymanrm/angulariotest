import { Component, OnInit } from '@angular/core';
import {BooksService} from '../../services/books.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';
import {Book, BookDetails} from '../../interfaces/Book';
import {defaultIfEmpty, first, map, switchMap, take, tap} from 'rxjs/operators';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book$: Observable<Book>;
  bookCover$: Observable<string>;

  constructor(
    private booksService: BooksService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.book$ = this.activatedRoute.parent.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.booksService.findBook(
          params.get('filter'),
          Number(params.get('pageIndex')),
          Number(params.get('index'))
        )
      )
    );

    // this.bookCover$ = this.book$.pipe(
    //   map(value =>
    //     Array.isArray(value.covers) && value.covers.length > 0
    //       ? `https://covers.openlibrary.org/b/id/${value.covers[0]}-L.jpg`
    //       : 'https://via.placeholder.com/300x450'
    //   ),
    // );
  }
}

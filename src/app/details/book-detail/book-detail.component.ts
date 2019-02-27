import { Component, OnInit } from '@angular/core';
import {BooksService} from '../../services/books.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';
import {Book, BookDetails} from '../../interfaces/Book';
import {defaultIfEmpty, first, map, switchMap, take, tap} from 'rxjs/operators';
import {MatChipInputEvent} from '@angular/material';
import {DetailsResponse} from 'src/app/interfaces/Responses';

export interface Tag {
  name: string;
}

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  details$: Observable<DetailsResponse>;
  bookCover$: Observable<string>;
  tags: Tag[] = [];

  constructor(
    private booksService: BooksService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.details$ = this.activatedRoute.parent.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.booksService.getBookDetails(`OLID:${params.get('key')}`)
      )
    );
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tags.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
}

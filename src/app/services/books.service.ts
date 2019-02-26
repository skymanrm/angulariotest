import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BooksResponse} from '../interfaces/Responses';
import {map} from 'rxjs/operators';
import {Book, BookDetails} from '../interfaces/Book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private http: HttpClient) { }

  findBooks(search: string, pageIndex: number): Observable<BooksResponse> {
    return this.http.get<BooksResponse>(`http://openlibrary.org/search.json?q=${search}&page=${pageIndex + 1}`);
  }

  findBook(search: string, pageIndex: number, resultIndex: number): Observable<Book> {
    return this.http
      .get(`http://openlibrary.org/search.json?q=${search}&page=${pageIndex + 1}&limit=1`)
      .pipe(
        map(val => val['docs'][resultIndex])
      );
  }

  getBookDetails(bookId: string): Observable<BookDetails> {
    return this.http
      .get(`https://openlibrary.org/api/books?bibkeys=${bookId}&jscmd=details&format=json`)
      .pipe(
        map(val => val[bookId].details)
      );
  }
}

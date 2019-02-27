import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BooksResponse, DetailsResponse} from '../interfaces/Responses';
import {map, tap} from 'rxjs/operators';
import {Book, BookDetails} from '../interfaces/Book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private http: HttpClient) { }

  findBooks(search: string, pageIndex: number): Observable<BooksResponse> {
    return this.http.get<BooksResponse>(`http://openlibrary.org/search.json?q=${search}&page=${pageIndex + 1}`);
  }

  getBook(key: string): Observable<BookDetails> {
    return this.http
      .get(`http://openlibrary.org${key}.json`)
      .pipe(
        tap(console.log)
      );
  }

  getBookDetails(bookId: string): Observable<DetailsResponse> {
    return this.http
      .get(`https://openlibrary.org/api/books?bibkeys=${bookId}&jscmd=details&format=json`)
      .pipe(
        map(val => new DetailsResponse(val[bookId].details))
      );
  }
}
// http://covers.openlibrary.org/b/olid/OL26092341M-M.jpg
// http://covers.openlibrary.org/w/olid/OL27448W-M.jpg

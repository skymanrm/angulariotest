import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BooksResponse, DetailsResponse} from '../Responses';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private http: HttpClient) { }

  findBooks(search: string, subject: string, pageIndex: number): Observable<BooksResponse> {
    let query = `page=${pageIndex + 1}`;
    if (search) {
      query += `&title=${search}`;
    }
    if (subject) {
      query += `&subject=${subject}`;
    }
    return this.http.get<BooksResponse>(
      `http://openlibrary.org/search.json?${query}`
    );
  }

  getBookDetails(bookId: string): Observable<DetailsResponse> {
    return this.http
      .get(`https://openlibrary.org/api/books?bibkeys=${bookId}&jscmd=details&format=json`)
      .pipe(
        map(val => new DetailsResponse(val[bookId]))
      );
  }
}

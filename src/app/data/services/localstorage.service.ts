import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BooksResponse, DetailsResponse} from '../Responses';
import {map, tap} from 'rxjs/operators';
import {Book, BookLocal} from '../Book';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  static BOOKS_KEY = 'ob:books';
  static LANG_KEY = 'ob:lang';

  private loadItems(): any {
    const data = window.localStorage.getItem(LocalstorageService.BOOKS_KEY);
    return data ? JSON.parse(data) : {};
  }

  private setItems(data: any): void {
    window.localStorage.setItem(LocalstorageService.BOOKS_KEY, JSON.stringify(data));
  }

  getBook(key: string): BookLocal {
    const items = this.loadItems();
    return new BookLocal(items[key] || {});
  }

  setBook(book: BookLocal) {
    const items = this.loadItems();
    items[book.key] = book;
    this.setItems(items);
  }

  deleteBook(key: string): void {
    const items = this.loadItems();
    delete items[key];
    this.setItems(items);
  }

  getAllBooks(): BookLocal[] {
    const items = this.loadItems();
    return Object.values(items).map((d) => new BookLocal(d));
  }

  setLang(lang: string): void {
    window.localStorage.setItem(LocalstorageService.LANG_KEY, lang);
  }

  getLang(defaultLang: string): string {
    return window.localStorage.getItem(LocalstorageService.LANG_KEY) || defaultLang;
  }
}

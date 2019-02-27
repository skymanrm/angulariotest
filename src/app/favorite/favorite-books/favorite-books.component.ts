import { Component, OnInit } from '@angular/core';
import {LocalstorageService} from '../../data/services/localstorage.service';
import {BookLocal} from '../../data/Book';
import {Router} from '@angular/router';

@Component({
  selector: 'app-favorite-books',
  templateUrl: './favorite-books.component.html',
  styleUrls: ['./favorite-books.component.css']
})
export class FavoriteBooksComponent implements OnInit {
  books: BookLocal[];

  constructor(
    private localstorageService: LocalstorageService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.books = this.localstorageService.getAllBooks();
  }

  deleteBook(key: string) {
    this.localstorageService.deleteBook(key);
    this.books = this.localstorageService.getAllBooks();
  }

  openBook(key: string) {
    this.router.navigate([`/book/`, {key}]);
  }
}

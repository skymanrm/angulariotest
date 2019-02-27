import { Component, OnInit } from '@angular/core';
import intersection from 'lodash.intersection';
import {LocalstorageService} from '../../data/services/localstorage.service';
import {BookLocal} from '../../data/Book';
import {Router} from '@angular/router';
import {Tag} from '../../data/Tag';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-favorite-books',
  templateUrl: './favorite-books.component.html',
  styleUrls: ['./favorite-books.component.css']
})
export class FavoriteBooksComponent implements OnInit {
  books: BookLocal[];
  tags: Tag[];
  selectedTags = new FormControl();

  constructor(
    private localstorageService: LocalstorageService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.books = this.localstorageService.getAllBooks();
    this.tags = this.books
      .map((book) => book.tags)
      .reduce((acc, val) => acc.concat(val));
    this.selectedTags.setValue(this.tags);
  }

  deleteBook(key: string) {
    this.localstorageService.deleteBook(key);
    this.books = this.localstorageService.getAllBooks();
  }

  openBook(key: string) {
    this.router.navigate([`/book/`, {key}]);
  }

  filteredBooks(): BookLocal[] {
    return this.books.filter((book) => intersection(book.tags, this.selectedTags.value).length > 0);
  }
}

import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {BooksService} from '../../data/services/books.service';
import {MatPaginator, MatSort} from '@angular/material';
import {BooksDataSource} from './books.datasource';
import {FormControl} from '@angular/forms';
import {Book} from '../../data/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [ BooksService ],
})

export class BooksComponent implements OnInit, AfterViewInit {
  pageSize = 100;
  displayedColumns = new FormControl();
  filterValue = new FormControl('lord of the rings');
  subjectValue = new FormControl('');
  availableColumns: string[] = ['thumbnail', 'title', 'first_publish_year', 'author_name', 'subject'];
  dataSource: BooksDataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private booksService: BooksService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.dataSource = new BooksDataSource(this.booksService);
    this.loadBooks(0);
    this.displayedColumns.setValue(this.availableColumns);
  }

  ngAfterViewInit(): void {
    this.paginator.page.subscribe((evt) => {
      this.loadBooks(evt.pageIndex);
    });
  }

  applyFilter(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      this.loadBooks();
    }
  }

  loadBooks(pageIndex?: number): void {
    if (typeof pageIndex === 'undefined') {
      this.paginator.firstPage();
      pageIndex = 0;
    }
    this.dataSource.loadBooks(
      this.filterValue.value,
      this.subjectValue.value,
      pageIndex
    );
  }

  openBook(book: Book): void {
    this.router.navigate([`/book/`, {key: `OLID:${book.olid()}`}]);
  }
}

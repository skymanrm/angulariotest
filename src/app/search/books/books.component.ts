import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {BooksService} from '../../services/books.service';
import {MatPaginator, MatSort} from '@angular/material';
import {BooksDataSource} from './books.datasource';
import {FormControl} from '@angular/forms';
import {Book} from '../../interfaces/Book';

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
  availableColumns: string[] = ['thumbnail', 'title', 'first_publish_year', 'author_name', 'subject'];
  dataSource: BooksDataSource;

  // filterValue = 'angular';

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
    this.dataSource.loadBooks(this.filterValue.value, pageIndex);
  }

  getBookPhoto(book: Book): string {
    if (book.cover_i && book.cover_i !== '-1') {
      return `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
    }
    return 'https://via.placeholder.com/100';
  }

  openBook(book: Book, index: number): void {
    const { pageIndex } = this.paginator;
    this.router.navigate(['/book', {filter: this.filterValue.value, index, pageIndex}]);
  }
}

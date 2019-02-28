import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';
import {BooksService} from '../../data/services/books.service';
import {finalize} from 'rxjs/operators';
import {Book} from '../../data/Book';

export class BooksDataSource implements DataSource<Book> {
  private booksSubject = new BehaviorSubject<Book[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private resultsCountSubject = new BehaviorSubject<number>(0);

  public loading$ = this.loadingSubject.asObservable();
  public resultsCount$ = this.resultsCountSubject.asObservable();

  constructor(private booksService: BooksService) {
  }

  connect(collectionViewer: CollectionViewer): Observable<Book[]> {
    return this.booksSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.booksSubject.complete();
    this.loadingSubject.complete();
    this.resultsCountSubject.complete();
  }

  loadBooks(search: string, subject: string, pageIndex = 0) {
    this.loadingSubject.next(true);
    this.booksService.findBooks(search, subject, pageIndex)
      .subscribe((result) => {
        this.resultsCountSubject.next(result.numFound);
        this.booksSubject.next(
          result.docs.map(d => new Book(d))
        );
      }, (err) => {
        alert(`API returned error: ${err}`);
      }, () => {
        this.loadingSubject.next(false);
      });
  }
}

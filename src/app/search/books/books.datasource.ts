import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';
import {BooksService} from '../../services/books.service';
import {finalize} from 'rxjs/operators';
import {Book} from '../../interfaces/Book';

export class BooksDataSource implements DataSource<Book> {
  private booksSubject = new BehaviorSubject<Book[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private resultsCountSubject = new BehaviorSubject<number>(0);
  private itemsPerPageSubject = new BehaviorSubject<number>(0);

  public loading$ = this.loadingSubject.asObservable();
  public resultsCount$ = this.resultsCountSubject.asObservable();
  public itemsPerPageSubject$ = this.itemsPerPageSubject.asObservable();

  constructor(private booksService: BooksService) {
  }

  connect(collectionViewer: CollectionViewer): Observable<Book[]> {
    return this.booksSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.booksSubject.complete();
    this.loadingSubject.complete();
    this.resultsCountSubject.complete();
    this.itemsPerPageSubject.complete();
  }

  loadBooks(search: string, pageIndex = 0) {
    this.loadingSubject.next(true);
    this.booksService.findBooks(search, pageIndex)
      .pipe(
        finalize(() => {
          this.loadingSubject.next(false);
        })
      )
      .subscribe((result) => {
        this.itemsPerPageSubject.next(result.docs.length);
        this.resultsCountSubject.next(result.numFound);
        this.booksSubject.next(result.docs);
      });
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailsRoutingModule} from './details-routing.module';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BooksService} from '../data/services/books.service';
import {MaterialModule} from '../material-module';
import {LocalstorageService} from '../data/services/localstorage.service';

@NgModule({
  declarations: [
    BookDetailComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DetailsRoutingModule,
  ],
  providers: [
    BooksService,
    LocalstorageService,
  ]
})
export class DetailsModule { }

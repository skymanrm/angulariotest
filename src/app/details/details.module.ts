import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailsRoutingModule} from './details-routing.module';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BooksService} from '../services/books.service';
import {MaterialModule} from '../material-module';

@NgModule({
  declarations: [
    BookDetailComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DetailsRoutingModule
  ],
  providers: [
    BooksService,
  ]
})
export class DetailsModule { }

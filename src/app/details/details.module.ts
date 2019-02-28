import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailsRoutingModule} from './details-routing.module';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BooksService} from '../data/services/books.service';
import {MaterialModule} from '../material-module';
import {LocalstorageService} from '../data/services/localstorage.service';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    BookDetailComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DetailsRoutingModule,
    TranslateModule.forChild({}),
  ],
  providers: [
    BooksService,
    LocalstorageService,
  ]
})
export class DetailsModule { }

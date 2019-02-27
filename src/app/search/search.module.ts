import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material-module';
import {SearchRoutingModule} from './search-routing.module';
import {BooksService} from '../data/services/books.service';
import {BooksComponent} from './books/books.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    BooksComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SearchRoutingModule,
    TranslateModule.forChild({}),
  ],
  providers: [
    BooksService,
  ],
})
export class SearchModule { }

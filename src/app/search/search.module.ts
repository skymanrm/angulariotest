import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material-module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchRoutingModule} from './search-routing.module';
import {BooksService} from '../services/books.service';
import {BooksComponent} from './books/books.component';

@NgModule({
  declarations: [
    BooksComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SearchRoutingModule,
  ],
  providers: [
    BooksService,
  ],
})
export class SearchModule { }

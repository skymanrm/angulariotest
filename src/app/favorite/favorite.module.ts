import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FavoriteRoutingModule} from './favorite-routing.module';
import {FavoriteBooksComponent} from './favorite-books/favorite-books.component';

@NgModule({
  declarations: [
    FavoriteBooksComponent,
  ],
  imports: [
    CommonModule,
    FavoriteRoutingModule,
  ],
})
export class FavoriteModule { }

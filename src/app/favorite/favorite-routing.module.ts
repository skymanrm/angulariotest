import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FavoriteBooksComponent} from './favorite-books/favorite-books.component';

const routes: Routes = [
  {
    path: '',
    component: FavoriteBooksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoriteRoutingModule{ }

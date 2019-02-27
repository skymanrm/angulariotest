import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FavoriteRoutingModule} from './favorite-routing.module';
import {FavoriteBooksComponent} from './favorite-books/favorite-books.component';
import {MaterialModule} from '../material-module';
import {LocalstorageService} from '../data/services/localstorage.service';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    FavoriteBooksComponent,
  ],
  imports: [
    CommonModule,
    FavoriteRoutingModule,
    MaterialModule,
    TranslateModule.forChild({}),
  ],
  providers: [
    LocalstorageService,
  ]
})
export class FavoriteModule { }

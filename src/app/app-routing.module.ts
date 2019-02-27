import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {
    path: 'fav',
    loadChildren: './favorite/favorite.module#FavoriteModule'
  },
  {
    path: 'book',
    loadChildren: './details/details.module#DetailsModule',
  },
  {
    path: 'search',
    loadChildren: './search/search.module#SearchModule',
  },
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}

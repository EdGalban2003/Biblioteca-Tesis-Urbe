import { Routes } from '@angular/router';
import { HomeComponent } from '../core/Modules/home/home.component';
import { SearchcomponentComponent } from '../core/Modules/search/search.component';
import { ArticleComponent } from '../core/Modules/article/article.component';
import { SavesComponent } from '../core/Modules/saves/saves.component';
import { ErrorsPageComponent } from '../core/components/errors-page/errors-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'article-page', component: ArticleComponent },
  { path: 'busqueda-page', component: SearchcomponentComponent },
  { path: 'saves-page', component: SavesComponent },
  { path: 'errors-page', component: ErrorsPageComponent },
  { path: 'favorites-page', component: SavesComponent },
  { path: '**', redirectTo: 'errors-page' },
];

import { Component } from '@angular/core';
import { ArticlesComponent } from '../../components/articles/articles.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { PaginatorComponent } from '../../components/paginator/paginator.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchcomponent',
  standalone: true,
  imports: [
    ArticlesComponent,
    SearchBarComponent,
    PaginatorComponent,
    PaginatorComponent,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchcomponentComponent {
  constructor(private router: Router) {}
  goTo(route: string) {
    this.router.navigate([route]);
  }
}

import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-saves',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatDividerModule, MatCardModule],
  templateUrl: './article-saves.component.html',
  styleUrl: './article-saves.component.css',
})
export class ArticleSavesComponent {
  constructor(private router: Router) {}
  goBack() {
    this.router.navigate(['/busqueda-page']);
  }
}

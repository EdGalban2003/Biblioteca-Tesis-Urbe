import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-save-button-3',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './save-button-3.component.html',
  styleUrl: './save-button-3.component.css',
})
export class SaveButton3Component {
  constructor(private router: Router) {}
  goToFavorites() {
    this.router.navigate(['/favorites-page']);
  }
}

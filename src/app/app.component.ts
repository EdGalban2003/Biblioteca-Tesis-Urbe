import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../core/layout/footer/footer.component';
import { NavbarComponent } from '../core/layout/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { SnackbarService } from '../core/services/snackbar.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavbarComponent, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private snack: SnackbarService) {
    //this.snack.show('Bienvenido a la Biblioteca de Tesis', 'Cerrar', 5000);
  }
  title = 'BuscadorBiblioteca';
}

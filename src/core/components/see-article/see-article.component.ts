import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { SaveButton2Component } from '../buttons/save-button-2/save-button-2.component';
import { DomSanitizer } from '@angular/platform-browser';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-see-article',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    SaveButton2Component,
    SaveButton2Component,
    MatPaginatorModule,
    SearchBarComponent,
  ],
  templateUrl: './see-article.component.html',
  styleUrl: './see-article.component.css',
})
export class SeeArticleComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router
  ) {
    this.matIconRegistry.addSvgIcon(
      'pdf',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./icons/pdf.svg')
    );
  }

  goBack() {
    this.router.navigate(['/busqueda-page']);
  }
}

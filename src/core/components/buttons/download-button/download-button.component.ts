import { Component } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-download-button',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, ],
  templateUrl: './download-button.component.html',
  styleUrl: './download-button.component.css'
})
export class DownloadButtonComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ){
    this.matIconRegistry.addSvgIcon(
      "pdf",
      this.domSanitizer.bypassSecurityTrustResourceUrl("./icons/pdf.svg")
    );
  }
}

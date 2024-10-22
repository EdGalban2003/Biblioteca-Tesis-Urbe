import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-save-button-1',
  standalone: true,
  imports: [MatButtonModule , MatIconModule, MatDividerModule],
  templateUrl: './save-button-1.component.html',
  styleUrl: './save-button-1.component.css'
})
export class SaveButton1Component {

}

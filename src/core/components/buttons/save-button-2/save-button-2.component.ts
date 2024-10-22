import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-save-button-2',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule,],
  templateUrl: './save-button-2.component.html',
  styleUrl: './save-button-2.component.css'
})
export class SaveButton2Component {
  
}


import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { SaveButton3Component } from '../buttons/save-button-3/save-button-3.component';



@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule, MatButtonModule, MatSelectModule, MatDividerModule, MatIconModule, SaveButton3Component, ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

}

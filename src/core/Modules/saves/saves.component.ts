import { Component } from '@angular/core';
import { ArticleSavesComponent } from '../../components/article-saves/article-saves.component';

@Component({
  selector: 'app-saves',
  standalone: true,
  imports: [ArticleSavesComponent],
  templateUrl: './saves.component.html',
  styleUrl: './saves.component.css'
})
export class SavesComponent {

}

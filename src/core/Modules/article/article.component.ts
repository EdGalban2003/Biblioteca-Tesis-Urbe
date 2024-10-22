import { Component } from '@angular/core';
import { SeeArticleComponent } from '../../components/see-article/see-article.component';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [SeeArticleComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {

}

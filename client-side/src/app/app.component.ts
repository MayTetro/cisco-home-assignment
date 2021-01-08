import {Component} from '@angular/core';
import {Article} from './interfaces/articles';
import {ArticleService} from './services/article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];
  searchedValue: string;

  constructor(private articleService: ArticleService) {
  }

  save(subRedditName: string) {
    this.searchedValue = subRedditName;
    this.articleService.getHeroes(subRedditName).subscribe((articles: Article[]) => {
      this.articles = articles;
    });
  }
}

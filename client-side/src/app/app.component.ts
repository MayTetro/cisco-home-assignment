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
  noArticlesToShow: boolean;
  searchedValue: string;

  constructor(private articleService: ArticleService) {
    this.noArticlesToShow = true;
  }

  save(subRedditName: string) {
    this.searchedValue = subRedditName;
    this.articleService.getHeroes(subRedditName).subscribe((articles: Article[]) => {
      debugger;
      this.noArticlesToShow = !!articles.length;
      this.articles = articles;
    });
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../interfaces/articles';

@Component({
  selector: 'app-article-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  @Input() articles: Article[];

  constructor() {
  }

  ngOnInit(): void {
  }
}

import {Component, OnInit} from '@angular/core';
import {Article} from './article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: Article = {};
  articles: Article[] = [{
    title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
    url: 'https://www.freecodecamp.org/news/typescript-generics-with-functional-react-components/'
  },
    {
      title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
      url: 'https://www.freecodecamp.org/news/typescript-generics-with-functional-react-components/'
    },
    {
      title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
      url: 'https://www.freecodecamp.org/news/typescript-generics-with-functional-react-components/'
    }

  ];

  addNewArticle() {
    this.articles.push(this.article);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}

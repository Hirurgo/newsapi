import { URL } from './constants';
import { renderArticleElement } from './renderArticleElement';

fetch(URL)
    .then(response => response.json())
    .then(json => json.articles)
    .then(articles => articles.map(renderArticleElement));

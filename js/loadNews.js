import { NEWS_URL, API_KEY, NEWS_SECTION, BASE_URL } from './constants.js';
import { renderArticleElement } from './renderArticleElement.js';
import { cleanElement } from './cleanElement.js';

export function loadNews(source) {
  const url = source ? `${BASE_URL}&sources=${source}` : NEWS_URL;

  cleanElement(NEWS_SECTION);

  fetch(url)
    .then(response => response.json())
    .then(json => json.articles)
    .then(articles => articles.map(renderArticleElement));
}
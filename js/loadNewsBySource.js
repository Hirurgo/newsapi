import { togleMenu } from './togleMenu.js';
import { loadNews } from './loadNews.js';

export function loadNewsBySource(event) {
  loadNews(event.target.value);
  togleMenu();
}

import { NEWS_LIST, TOP_NEWS_TOGGLE_BUTTON, SOURCE_SELECTOR } from '../../constants';
import cleanElement from './cleanElement';
import renderArticleElement from './renderArticleElement';
import loadNewsManager from '../../LoadNewsManager';

export default async function loadNews() {
  cleanElement(NEWS_LIST);
  const source = SOURCE_SELECTOR.value;
  const isTopNews = TOP_NEWS_TOGGLE_BUTTON.checked;
  const response =  isTopNews ? await loadNewsManager.getNews(source) : await loadNewsManager.getTopNews(source);
  const { articles } = await response.json();
  articles.map(renderArticleElement)
}

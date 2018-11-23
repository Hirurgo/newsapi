export {
  NEWS_LIST,
  TOP_NEWS_TOGGLE_BUTTON,
  SOURCE_SELECTOR
} from './constants';
import cleanElement from './cleanElement';

export default async function loadNews() {
  cleanElement(NEWS_LIST);
  const url = TOP_NEWS_TOGGLE_BUTTON.checked ? TOP_NEWS_URL : NEWS_URL;
  const source = SOURCE_SELECTOR.value;
  const response = await fetch(`${url}&sources=${source}`);
  const { articles } = await response.json();
  articles.map(renderArticleElement)
}

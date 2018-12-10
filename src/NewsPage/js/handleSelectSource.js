import { TOP_NEWS_TOGGLE_BUTTON } from '../../constants';
import loadNews from './loadNews';

export default function handleSelectSource(event) {
  TOP_NEWS_TOGGLE_BUTTON.classList.remove('disabled');
  loadNews();
}
  
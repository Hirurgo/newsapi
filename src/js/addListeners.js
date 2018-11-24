import {
  MENU_TOGGLE_BUTTON,
  TOP_NEWS_TOGGLE_BUTTON,
  SOURCE_SELECTOR,
  NEWS_LIST
} from './constants';
import toggleMenu from './toggleMenu';
import handleToggleTopNews from './handleToggleTopNews';
import handleSelectSource from './handleSelectSource';
import redirectToArticleSource from './redirectToArticleSource';

export default function addListeners() { 
  MENU_TOGGLE_BUTTON.addEventListener('click', toggleMenu);
  TOP_NEWS_TOGGLE_BUTTON.addEventListener('click', handleToggleTopNews);
  SOURCE_SELECTOR.addEventListener('change', handleSelectSource);
  NEWS_LIST.addEventListener('click', redirectToArticleSource);
}
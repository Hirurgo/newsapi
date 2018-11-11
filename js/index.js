import { MENU_TOGGLE_BUTTON, NEWS_SECTION, SOURCES_SELECTOR } from './constants.js';
import { redirectToArticleSource } from './redirectToArticleSource.js';
import { togleMenu } from './togleMenu.js';
import { loadNews } from './loadNews.js';
import { loadSources } from './loadSources.js';
import { loadNewsBySource } from './loadNewsBySource.js';

loadSources();
loadNews();

MENU_TOGGLE_BUTTON.addEventListener( "click", togleMenu);
NEWS_SECTION.addEventListener("click", redirectToArticleSource);
SOURCES_SELECTOR.addEventListener("change", loadNewsBySource);


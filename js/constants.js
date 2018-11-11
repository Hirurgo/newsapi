export const API_KEY = 'fee5ac1d35964578ab29d346362449e8';
export const NEWS_SECTION = document.getElementById('news');
export const MENU_TOGGLE_BUTTON = document.getElementById('toggleMenuButton');
export const MENU = document.getElementById('menu');
export const SOURCES_SELECTOR = document.getElementById('sources-selector');

export const BASE_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;
export const SOURCES_URL = `https://newsapi.org/v2/sources?apiKey=${API_KEY}`;
export const NEWS_URL = `${BASE_URL}&country=us`;

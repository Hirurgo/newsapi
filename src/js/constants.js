export const API_KEY = 'fee5ac1d35964578ab29d346362449e8';
export const NEWS_LIST = document.getElementById('news');
export const MENU_TOGGLE_BUTTON = document.getElementById('toggleMenuButton');
export const TOP_NEWS_TOGGLE_BUTTON = document.getElementById('toggleTopNewsButton');
export const MENU = document.getElementById('menu');
export const SOURCE_SELECTOR = document.getElementById('sources-selector');

export const BASE_URL = `https://newsapi.org/v2`;
export const NEWS_URL = `${BASE_URL}/everything?language=en&apiKey=${API_KEY}`;
export const TOP_NEWS_URL = `${BASE_URL}/top-headlines?language=en&apiKey=${API_KEY}`;
export const SOURCES_URL = `${BASE_URL}/sources?language=en&apiKey=${API_KEY}`;


const API_KEY = 'fee5ac1d35964578ab29d346362449e8';
const NEWS_LIST = document.getElementById('news');
const MENU_TOGGLE_BUTTON = document.getElementById('toggleMenuButton');
const TOP_NEWS_TOGGLE_BUTTON = document.getElementById('toggleTopNewsButton');
const MENU = document.getElementById('menu');
const SOURCE_SELECTOR = document.getElementById('sources-selector');

const BASE_URL = `https://newsapi.org/v2`;
const NEWS_URL = `${BASE_URL}/everything?language=en&apiKey=${API_KEY}`;
const TOP_NEWS_URL = `${BASE_URL}/top-headlines?language=en&apiKey=${API_KEY}`;
const SOURCES_URL = `${BASE_URL}/sources?language=en&apiKey=${API_KEY}`;


const API_KEY = 'fee5ac1d35964578ab29d346362449e8';
const NEWS_SECTION = document.getElementById('news');
const MENU_TOGGLE_BUTTON = document.getElementById('toggleMenuButton');
const MENU = document.getElementById('menu');
const SOURCES_SELECTOR = document.getElementById('sources-selector');

const BASE_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;
const SOURCES_URL = `https://newsapi.org/v2/sources?apiKey=${API_KEY}`;
const NEWS_URL = `${BASE_URL}&country=us`;

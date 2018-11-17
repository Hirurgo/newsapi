"use strict";

var API_KEY = 'fee5ac1d35964578ab29d346362449e8';
var NEWS_LIST = document.getElementById('news');
var MENU_TOGGLE_BUTTON = document.getElementById('toggleMenuButton');
var TOP_NEWS_TOGGLE_BUTTON = document.getElementById('toggleTopNewsButton');
var MENU = document.getElementById('menu');
var SOURCE_SELECTOR = document.getElementById('sources-selector');
var BASE_URL = "https://newsapi.org/v2";
var NEWS_URL = "".concat(BASE_URL, "/everything?language=en&apiKey=").concat(API_KEY);
var TOP_NEWS_URL = "".concat(BASE_URL, "/top-headlines?language=en&apiKey=").concat(API_KEY);
var SOURCES_URL = "".concat(BASE_URL, "/sources?language=en&apiKey=").concat(API_KEY);
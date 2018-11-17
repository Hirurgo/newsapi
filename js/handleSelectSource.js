"use strict";

function handleSelectSource(event) {
  TOP_NEWS_TOGGLE_BUTTON.classList.remove('disabled');
  loadNews();
}
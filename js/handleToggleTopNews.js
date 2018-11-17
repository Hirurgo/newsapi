"use strict";

function handleToggleTopNews(event) {
  if (SOURCE_SELECTOR.selectedIndex === 0) {
    event.preventDefault();
    SOURCE_SELECTOR.classList.add('error');
    setTimeout(function () {
      return SOURCE_SELECTOR.classList.remove('error');
    }, 1000);
  } else {
    loadNews();
  }
}
"use strict";

function redirectToArticleSource(event) {
  var target = event.target;

  while (target !== NEWS_LIST) {
    if (target.tagName === 'ARTICLE') {
      window.open(target.dataset.url);
      return;
    }

    target = target.parentNode;
  }
}
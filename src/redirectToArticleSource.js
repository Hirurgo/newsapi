function redirectToArticleSource(event) {
  let { target } = event;

  while (target !== NEWS_SECTION) {
    if (target.tagName === 'ARTICLE') {
      window.open(target.dataset.url);
      return;
    }
    target = target.parentNode;
  }
}

function loadNews(source) {
  const url = source ? `${BASE_URL}&sources=${source}` : NEWS_URL;

  cleanElement(NEWS_SECTION);

  fetch(url)
    .then(response => response.json())
    .then(json => json.articles)
    .then(articles => articles.map(renderArticleElement));
}

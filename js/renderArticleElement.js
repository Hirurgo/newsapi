"use strict";

function renderArticleElement(article) {
  var title = article.title,
      description = article.description,
      url = article.url,
      urlToImage = article.urlToImage;
  var articleElement = document.createElement('article');
  articleElement.classList.add('article');
  articleElement.setAttribute('data-url', url);

  if (title) {
    var titleElement = document.createElement('h3');
    titleElement.classList.add('title');
    titleElement.innerHTML = title;
    articleElement.appendChild(titleElement);
  }

  if (description) {
    var descriptionElement = document.createElement('p');
    descriptionElement.classList.add('description');
    descriptionElement.innerHTML = description;
    articleElement.appendChild(descriptionElement);
  }

  if (urlToImage) {
    var imgElement = document.createElement('img');
    imgElement.classList.add('image');
    imgElement.src = urlToImage;
    imgElement.alt = title;
    articleElement.appendChild(imgElement);
  }

  NEWS_LIST.appendChild(articleElement);
}
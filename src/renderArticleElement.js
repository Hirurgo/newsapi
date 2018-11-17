function renderArticleElement(article) {
  const { title, description, url, urlToImage } = article;

  const articleElement = document.createElement('article');
  articleElement.classList.add('article');
  articleElement.setAttribute('data-url', url);

  if (title) {
    const titleElement = document.createElement('h3');
    titleElement.classList.add('title');
    titleElement.innerHTML = title;
    articleElement.appendChild(titleElement);
  }

  if (description) {
    const descriptionElement = document.createElement('p');
    descriptionElement.classList.add('description');
    descriptionElement.innerHTML = description;
    articleElement.appendChild(descriptionElement);
  }

  if (urlToImage) {
    const imgElement = document.createElement('img');
    imgElement.classList.add('image');
    imgElement.src = urlToImage;
    imgElement.alt = title;
    articleElement.appendChild(imgElement);
  }

  NEWS_LIST.appendChild(articleElement);
}

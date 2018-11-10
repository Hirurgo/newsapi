import { NEWS_SECTION, API_KEY } from './constants.js';

const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

const renderArticleElement = article => {
    const { title, description } = article;
    const descriptionElement = document.createElement('p');
    descriptionElement.innerHTML = description;

    const titleElement = document.createElement('h3');
    titleElement.innerHTML = title;

    const articleElement = document.createElement('article');
    articleElement.appendChild(titleElement);
    articleElement.appendChild(descriptionElement);

    NEWS_SECTION.appendChild(articleElement)
}

fetch(URL)
    .then(response => response.json())
    .then(json => json.articles)
    .then(articles => articles.map(renderArticleElement));

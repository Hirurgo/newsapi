import { NEWS_SECTION } from './constants';

export const renderArticleElement = article => {
    const { title, description } = article;

    const descriptionElement = document.createElement('p');
    descriptionElement.classList.add('description');
    descriptionElement.innerHTML = description;

    const titleElement = document.createElement('h3');
    titleElement.classList.add('title');
    titleElement.innerHTML = title;

    const articleElement = document.createElement('article');
    articleElement.classList.add('article');
    articleElement.appendChild(titleElement);
    articleElement.appendChild(descriptionElement);

    NEWS_SECTION.appendChild(articleElement)
}

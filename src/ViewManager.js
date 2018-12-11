import NetworkManager from './NetworkManager';
import eventsManager from './EventsManager';

class ViewManager {
  constructor() {
    this.newsList = document.getElementById('news');
    this.menuToggleButton = document.getElementById('toggleMenuButton');
    this.topNewsToggleButton = document.getElementById('toggleTopNewsButton');
    this.menu = document.getElementById('menu');
    this.sourceSelector = document.getElementById('sources-selector');
    
    window.addEventListener('load', eventsManager.loadcontent);
    this.menuToggleButton.addEventListener('click', eventsManager.toggleMenu);
    this.topNewsToggleButton.addEventListener('click', eventsManager.handleToggleTopNews);
    this.sourceSelector.addEventListener('change', eventsManager.handleSelectSource);
    this.newsList.addEventListener('click', eventsManager.redirectToArticleSource);

    if(!this.instance) {
      this.instance = this;
    }
    return this.instance;
  }

  renderArticleElement = ({ title, description, url, urlToImage }) => {
    const div = document.createElement('div');
    div.innerHTML = 
      `<article class="article" data-url=${url}>
        <h3 class="title">${title}</h3>
        <p class="description">${description}</p>
        <img class="image" src=${urlToImage} alt=${title} />
      </article>`;
    this.newsList.appendChild(div.firstChild)
  }

  renderSourceElement = ({ name, id }) => {
    const div = document.createElement('div');
    div.innerHTML = `<option label="${name}" value="${id}">${name}</option>`;
    this.sourceSelector.appendChild(div.firstChild)
  }
  
  toggleMenu = event => {
    if (event) event.preventDefault();
    this.menu.classList.toggle('show');
    this.menuToggleButton.classList.toggle('active');
  }

  cleanNewsList = () => {
    while (this.newsList.firstChild) {
      this.newsList.removeChild(this.newsList.firstChild);
    }
  }

  redirectToArticleSource = event => {
    let { target } = event;

    while (target !== this.newList) {
      if (target.tagName === 'ARTICLE') {
        window.open(target.dataset.url);
        return;
      }
      target = target.parentNode;
    }
  }

  getSource = () => this.sourceSelector.value
  
  getToggleButtonStatus = () => this.topNewsToggleButton.checked

  activeteTopNewsButton = () => this.topNewsToggleButton.classList.remove('disabled')

  getSelectedSourceIndex = () => this.sourceSelector.selectedIndex

  setSourceSelectorInvalid = () => this.sourceSelector.classList.add('error');

  setSourceSelectorValid = () => this.sourceSelector.classList.remove('error');

  toggleMenu = () => {
    this.menu.classList.toggle('show');
    this.menuToggleButton.classList.toggle('active');
  }
}

export default new ViewManager();
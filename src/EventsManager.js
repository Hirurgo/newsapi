import loadNewsManager from './LoadNewsManager';
import viewManager from './ViewManager';

class EventsManager {
  constructor() {

    if(!this.instance) {
      this.instance = this;
    }
    return this.instance;
  }
  
  loadcontent = () => {
    this.loadNews();
    this.loadSources();
  }

  loadNews = async () => {
    const source = viewManager.getSource();
    // const isTopNews = viewManager.getToggleButtonStatus();
    // const response =  isTopNews ? await loadNewsManager.getNews(source) : await loadNewsManager.getTopNews(source);
    const response =  await loadNewsManager.getNews();
    const { articles } = await response.json();
    viewManager.cleanNewsList();
    articles.map(viewManager.renderArticleElement)
  }

  loadSources = async () => {
    const response = await loadNewsManager.getSources();
    const { sources } = await response.json();
    sources.map(viewManager.renderSourceElement)
  }

  handleSelectSource = event => {
    viewManager.activeteTopNewsButton();
    this.loadNews();
  }

  handleToggleTopNews = event => {
    if (viewManager.getSelectedSourceIndex() === 0) {
      event.preventDefault();
      const errorManager = require('./errorManager').default;
      const noSourceSelecterError = new errorManager('Need to select source before');
      noSourceSelecterError.drop();
      viewManager.setSourceSelectorInvalid();
      setTimeout(() => viewManager.setSourceSelectorValid, 1000);
    } else {
      this.loadNews();
    }
  }

  toggleMenu = event => {
    if (event) event.preventDefault();
    viewManager.toggleMenu();
  }
}

export default new EventsManager();
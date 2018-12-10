import NetworkManager from './NetworkManager';
import { BASE_URL, API_KEY } from './constants';

class LoadNewsManager {
  constructor(network){
    this.network = network;

    if(!this.instance) {
      this.instance = this;
    }
    return this.instance;
  }

  getSources() {
    return this.network.get('/sources?');
  }

  getNews(source) {
    return this.network.get(`/everything?sources=${source || 'all'}&`);
  }

  getTopNews(source) {
    return this.network.get(`/top-headlines?sources=${source || 'all'}&`);
  }
}

const networkManager = new NetworkManager(BASE_URL, API_KEY);

export default new LoadNewsManager(networkManager);
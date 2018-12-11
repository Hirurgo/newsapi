import NetworkManager from './NetworkManager';
import requstLogger from './requstLogger';

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

const networkManager = new NetworkManager();
const networkManagerWithLogging = new Proxy(networkManager, requstLogger)

export default new LoadNewsManager(networkManagerWithLogging);;
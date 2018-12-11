export default class NetworkManager {
  constructor(){
    this.baseUrl = 'https://newsapi.org/v2';
    this.apiKey = 'fee5ac1d35964578ab29d346362449e8';

    if(!this.instance) {
      this.instance = this;
    }
    return this.instance;
  }

  get = path => {
    return fetch(`${this.baseUrl}${path}language=en&apiKey=${this.apiKey}`)
  }

  post = (path, body) => {
    return fetch(
      `${this.baseUrl}${path}language=en&apiKey=${this.apiKey}`,
      {
        method: "POST",
        body: JSON.stringify(body)
      }
    )
  }
}

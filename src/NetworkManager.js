export default class NetworkManager {
  constructor(baseUrl, apiKey){
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;

    if(!this.instance) {
      this.instance = this;
    }
    return this.instance;
  }

  get(path) {
    return fetch(`${this.baseUrl}${path}language=en&apiKey=${this.apiKey}`)
  }

  post(path, body) {
    return fetch(
      `${this.baseUrl}${path}language=en&apiKey=${this.apiKey}`,
      {
        method: "POST",
        body: JSON.stringify(body)
      }
    )
  }
}

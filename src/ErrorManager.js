export default class ErrorManager {
  constructor(message){
    this.message = message;

    if(!this.instance) {
      this.instance = this;
    }
    return this.instance;
  }

  drop() {
    alert(this.message || 'Unexpected error')
  }
}
export default {
  get: (target, propKey, receiver) => {
    const origMethod = target[propKey];
    return (...args) => {
      console.log(`${propKey} reuqest to ${target.baseUrl}${args}`);
      return origMethod(...args);
    };
  }
}
export class PokemonTcgSetsRequest {
  endpoint = "sets";
  #params = {};
  conditions = {};
  constructor(endpoint, paramsObj = {}) {
    this.endpoint = endpoint;
    this.setParams(paramsObj);
  }
  // loop through query
  toQueryString() {
    let fubar = key + ":" + value;
  }
  // toDo formatting should not change depending on value
  query(key, value) {
    this.conditions[key] = value;
  }

  setParam(key, value) {
      this.#params[key] = value;
  }

  setParams(paramsObj) {
    for (const [key, value] of Object.entries(paramsObj)) {
      this.setParam(key, value);
    }
  }

  clearParam(key) {
    delete this.#params[key];
  }

  clearAll() {
    this.#params = {};
  }

  toString() {
    return new URLSearchParams(this.#params).toString();
  }
}
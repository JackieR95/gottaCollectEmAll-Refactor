export class PokemonTcgCardsRequest {
  endpoint = "cards";
  #params = {};

  constructor(endpoint, paramsObj = {}) {
    this.endpoint = endpoint;
    this.setParams(paramsObj);
  }

  setParam(key, value) {
    if (value !== undefined && value !== null && value !== "") {
      this.#params[key] = value;
    }
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
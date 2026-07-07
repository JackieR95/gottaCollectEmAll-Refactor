export class PokemonTcgSetsRequest {
  endpoint = "sets";
  // Stores standard top-level API configuration parameters (e.g., page, pageSize, orderBy)
  #params = {};
  // Stores specific search filters (e.g., name, series) to be bundled into the API's 'q' parameter
  conditions = {};

  constructor(endpoint, paramsObj = {}) {
    this.endpoint = endpoint;
    this.setParams(paramsObj);
  }

  // toDo formatting should not change depending on value
  query(key, value) {
    this.conditions[key] = value;
  }

  // loop through query
  toQueryString() {
    // Created a 2D array and using map returns a new array with key:value and a space between each item
    return Object.entries(this.conditions)
      .map(([key, value]) => {
        return `${key}:${value}`;
      }).join(" ");
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
    this.conditions = {};
  }

  toString() {
    const finalParams = { ...this.#params };
    const searchString = this.toQueryString();

    if (searchString.length > 0) {
      finalParams["q"] = searchString;
    }

    return new URLSearchParams(finalParams).toString();
  }
}
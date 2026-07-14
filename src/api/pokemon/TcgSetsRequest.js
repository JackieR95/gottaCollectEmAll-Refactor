// const SET_NAME_URL = "https://api.pokemontcg.io/v2/sets?select=id, name"

export class TcgSetsRequest {
  endpoint = "sets";
  params = {};
  headers = {};

  addHeader(key, value) {
    this.headers[key] = value;
  }

  getParams(id, name) {
    this.params[id] = {
      setId: id,
      setName: name,
    };
  }

  getAllSetIds() {
    return Object.keys(this.params);
  }

  toQueryString(id) {
    const targetSet = this.params[id];

    if (!targetSet) {
      return " ";
    }

    return `select=${targetSet.setId}, ${targetSet.setName}`;
  }
}

// const API_URL = "https://api.pokemontcg.io/v2/cards?q=set.id:";

export class TcgCardsRequest {
  endpoint = "cards";
  setIdParam = "base1";
  headers = {};

  setId(id) {
    if (id) {
      this.setIdParam = id;
    }
  }

  addHeader(key, value) {
    this.headers[key] = value;
  }

  toQueryString() {
    return "q=set.id:" + this.setIdParam;
  }
}

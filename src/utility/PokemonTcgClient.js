require('dotenv').config();


// const API_URL = "https://api.pokemontcg.io/v2/cards?q=set.id:";
// const SET_NAME_URL = "https://api.pokemontcg.io/v2/sets?select=id, name"

export class PokemonTcgClient {
  static BASE_URL = "https://api.pokemontcg.io/v2/";

  headers = {
    "X-Api-Key": process.env.POKEMON_TCG_KEY
  };

  //Write some config variables
  pageSize = 20;
  currentPage = 1;
  currentSearchQuery = "";

  async send(request) {

    let queryString = request.toString();
    let hasQueryString = queryString.length > 0 ? true : false;

    let fullURL = PokemonTcgClient.BASE_URL + request.endpoint +  (hasQueryString ? "?" + queryString : "");

    let response = await fetch(fullURL, { headers: this.headers });

    let result = await response.json();

    console.log("url response: " + result);
    return result;
  }
}

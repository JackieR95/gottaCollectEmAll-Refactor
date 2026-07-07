require('dotenv').config();


// const API_URL = "https://api.pokemontcg.io/v2/cards?q=set.id:";
// const SET_NAME_URL = "https://api.pokemontcg.io/v2/sets?select=id, name"

export class PokemonTcgClient {
  static BASE_URL = "https://api.pokemontcg.io/v2/";

  headers = {
    "X-Api-Key": process.env.POKEMON_TCG_KEY
  };

  //Write some config variables

  async send(request) {
    let queryString = request.toString();
    let hasQueryString = queryString.length > 0 ? true : false;
    let fullURL = PokemonTcgClient.BASE_URL + request.endpoint +  (hasQueryString ? "?" + queryString : "");

    let response = await fetch(fullURL, this.headers);

    console.log("url response: " + response);
    return response;
  }
}

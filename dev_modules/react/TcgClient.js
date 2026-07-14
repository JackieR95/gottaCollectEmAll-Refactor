import { TcgCardsResponse } from "../../src/api/pokemon/TcgCardsResponse.js";
import { TcgSetsResponse } from "../../src/api/pokemon/TcgSetsResponse.js";

export class TcgClient {
  static BASE_URL = "https://api.pokemontcg.io/v2/";
  apiKey;

  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  //Write some config variables
  pageSize = 20;
  currentPage = 1;
  currentSearchQuery = "";

  async send(request) {
    request.addHeader("X-Api-Key", this.apiKey);

    let queryString = request.toQueryString();
    let hasQueryString = queryString.length > 0 ? true : false;

    const isSetsRequest = request.endpoint.includes("sets");

    let fullURL = TcgClient.BASE_URL + request.endpoint;


    if (!isSetsRequest && hasQueryString) {
      fullURL += "?" + queryString;
    }

    console.log("url:", fullURL);

    let resp = await fetch(fullURL, { headers: request.headers });
    let resp1;

    if (request.endpoint == "cards") {
      resp1 = await TcgCardsResponse.newFromResponse(resp);
    }
    else if (request.endpoint == "sets") {
      resp1 = await TcgSetsResponse.newFromResponse(resp);
    }

    return resp1;
  }
}

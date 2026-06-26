let client;
let request;
let response;

client = new HttpClient();

class HttpClient {
    //Write some config variables
    // Create a global variable?
    static apiUrl = "https://api.pokemontcg.io/v2/cards?q=set.id:";

    async send(req) {
        let sets = this.getFetchSets();


        const resp = await fetch();
        return resp;
    }

    getFetchSets() {
        return sets;
    }

}

class ErrorResponse {
    status;

    constructor(status) {
        this.status = status;
    }

    getMessage() {
        throw new Error(`HTTP error! Status: ${this.status}`); // Throw an error if the response is not ok
        return

    }

}

class PokemonTcgRequest {
    params;
    endpoint = '';
}

  // container get's the html cardscontainer
  // This method fetches cards from the API and renders them into the specified container
  fetchAndRender(setName, containerId) {
    const container = document.getElementById(containerId);
    let url = "https://api.pokemontcg.io/v2/cards?q=set.id:" + setName;

    fetch(url)
      .then((response) => {
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`); // Throw an error if the response is not ok
        return response.json();
      })
      .then((data) => {
        // Get the cards from the data
        const cards = data.data;
        // Call the renderCards method to render the fetched cards into the specified container
        container.appendChild(CardContainer({ cards }));
      })
      .catch((error) => {
        console.error("Failed to fetch cards:", error);
        // Render 20 placeholders with null cards so createCardElement shows back image if API fails
        const placeholderArray = new Array(20).fill(null);
        // Call the renderCards method to render the placeholders
        this.renderCards(placeholderArray, containerId);
      });
  }

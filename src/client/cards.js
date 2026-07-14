/*
Modified by: Jacqueline Rael
Date: 06/11/2025
Lab: Final Project - GottaCollectEmAll
*/

// Import the general styles
import "../utility/general.js";
import { CardContainer } from "../components/CardContainer.js";
import { StorageService } from "../utility/storageService.js";
import { TcgClient } from "react";
import { TcgCardsRequest } from "../api/pokemon/TcgCardsRequest.js";
import { TcgSetsRequest } from "../api/pokemon/TcgSetsRequest.js";
import { TcgCardsResponse } from "../api/pokemon/TcgCardsResponse.js";

// Import the function to load the navbar
import { Navbar } from "../components/Navbar.js";
import { Set } from "../components/Set.js";
import { Collection } from "../components/Collection.js";

const pokemonCardStorage = new StorageService("myCollection");

const AVAILABLE_SETS = [
  { id: "base1", name: "Base Set" },
  { id: "base2", name: "Jungle" },
];

const CARD_BACK_IMAGE = "../assets/images/cardBack.png";
// const API_URL = "https://api.pokemontcg.io/v2/cards?q=set.id:";
// const BASE_URL =
//const SET_URL = "https://api.pokemontcg.io/v2/sets?select=id"
// const SET_NAME_URL = "https://api.pokemontcg.io/v2/sets?select=name"

function getUrlSetName() {
  // Get value of the set param from url query string
  return "base1";
}

// Initialize the Card class and set up event listeners when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", async () => {
  const containerNavbar = document.getElementById("navbar-container");
  const containerCard = document.getElementById("cards-container");
  // If currentPage is not provided, default to an empty string
  if (containerNavbar) {
    containerNavbar.innerHTML = Navbar("cards"); // Load the navbar HTML into the container
  }

  const setName = AVAILABLE_SETS[0].name;
  let label = "Cards In " + setName;

  let client = new TcgClient(POKEMON_TCG_KEY);
  let cardsRequest = new TcgCardsRequest();
  let setsRequest = new TcgSetsRequest();


  const urlParams = new URLSearchParams(window.location.search);
  const currentSetId = urlParams.get('set');

  console.log("Active Set ID:", currentSetId);

  cardsRequest.setId(currentSetId);

  let cardResponse = await client.send(cardsRequest);
  const cardsList = cardResponse.cards();

  console.log("cardResponse: ", cardResponse);


  containerCard.appendChild(
    CardContainer({
      label: cardsList[0].set.name,
      cards: cardResponse.cards(),
      onAddCard: (cardObj) => {
        addToCollection(cardObj);
      },
    }),
  );
});


///////////////////////////////// Rendering Page Layout //////////////////////////////////////////////////////

// This method renders the base set layout
function renderLayout(selectedPage, setName) {
  // Get the container by class name
  const container = document.getElementById("cards-container");

  if (!container) return;

  if (selectedPage === "base") {
    container.innerHTML = Set(setName);
  } else if (selectedPage === "collection") {
    container.innerHTML = Collection();
  }
}



//////////////////////////////////////// Collection Handling //////////////////////////////////////////////////////

function addToCollection(cardObj) {
  const collection = pokemonCardStorage.loadAll();

  const selectedQuantity = cardObj.chosenQuantity;
  // Check if the card ID exists in the collection then increment the count, otherwise add it with count 1
  if (collection[cardObj.id]) {
    collection[cardObj.id].count += selectedQuantity;
  } else {
    collection[cardObj.id] = {
      count: selectedQuantity,
      image: cardObj.images.small,
      name: cardObj.name,
      price: cardObj.price || 0, // get average sell price if available
    };
  }

  pokemonCardStorage.convertToString(collection);
  pokemonCardStorage.saveAll();
}

function renderCollectionPage() {
  const container = document.getElementById("cardsContainer");
  const totalCountSpan = document.getElementById("totalCardsCount");
  if (!container) return;

  const storedCollection = pokemonCardStorage.loadAll();

  // Calculate total cards and convert the object into an array for the component
  let totalCards = 0;
  const cardsArray = Object.keys(storedCollection).map((cardId) => {
    const cardData = storedCollection[cardId];
    totalCards += cardData.count;

    // Mapping your stored structure back into an object CardContainer can read
    return {
      id: cardId,
      name: cardData.name,
      images: { small: cardData.image },
      price: cardData.price,
      count: cardData.count,
    };
  });

  //  Update the total count text in the HTML
  if (totalCountSpan) {
    totalCountSpan.textContent = totalCards;
  }

  // Render via your CardContainer component
  if (cardsArray.length > 0) {
    container.appendChild(
      CardContainer({
        cards: cardsArray,
        onAddCard: (cardObj) => {
          addToCollection(cardObj);
          renderCollectionPage(); // Re-render to update counts dynamically if they add more
        },
      }),
    );
  } else {
    container.innerHTML = `<div class="col-12 text-center text-muted pixel-font mt-4">Your collection is empty!</div>`;
  }
}

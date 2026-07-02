/*
Modified by: Jacqueline Rael
Date: 06/11/2025
Lab: Final Project - GottaCollectEmAll
*/

// Import the general styles
import "../utility/general.js";
import { CardContainer } from "../components/CardContainer.js";
import { StorageService } from "../utility/storageService.js";

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
const API_URL = "https://api.pokemontcg.io/v2/cards?q=set.id:";

// import { getNameMatchRegex } from "../assets/searchValidate.js"; //
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
  const baseSetID = getUrlSetName();
  const setName = AVAILABLE_SETS[0].name;
  let cards = await getData(baseSetID);
  let label = "Cards In " + setName;

  containerCard.appendChild(
    CardContainer({
      label,
      cards,
      onAddCard: (cardObj) => {
        addToCollection(cardObj);
      },
    }),
  );

  /*
    // Get the base layout name and id
    const setName = AVAILABLE_SETS[0];

    // Get the URL parameters to determine which set is selected
    const params = new URLSearchParams(window.location.search);
    const selectedSet = params.get("set"); // e.g., "base" or "collection"

    // Check if the current page is the cards page
    const isCardsPage = window.location.pathname.includes("cards.html");

    // Render the appropriate layout based on the selected set or if it's the cards page
    if (selectedSet === "base") {
      renderLayout("base", setName);
      fetchAndRender(baseSetID, "cardsContainer");
    } else if (selectedSet === "collection") {
      renderLayout("collection", setName);
      const storedCollection = pokemonCardStorage.loadAll();
      renderCollectionPage();
    } else if (isCardsPage) {
      fetchAndRender(baseSetID, "cardsContainer");
    } else {
      renderSetLayout(); // fallback
      fetchAndRender(API_URL, "cardsContainer"); // default to base set
    }
    */
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

//////////////////////////////////////// Fetch And Render Cards //////////////////////////////////////////////////////

// This method fetches cards from the API and renders them into the specified container
async function getData(setName = "") {
  let url = API_URL + setName;

  return fetch(url)
    .then((response) => {
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`); // Throw an error if the response is not ok
      return response.json();
    })
    .then((json) => {
      // Get the cards from the data
      return json.data;
      // Call the renderCards method to render the fetched cards into the specified container
    })
    .catch((error) => {
      console.error("Failed to fetch cards:", error);
    });
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

//////////////////////////////////////// Page Routing & Initialization //////////////////////////////////////////////////////

////////////////////////////////// SEARCH FILTER ////////////////////////////////////

//Code removed for now, to be added later when i have time to make it work
/*


//Code for rendering the base set layout, removed the radio buttons for now and search bar
    container.innerHTML = `
    <!-- Back Button -->
      <div class="container mt-4">
        <a href="sets.html" class="btn pixel-font btn-outline-dark btn-sm mb-2">← Back</a>

        <!-- Search Bar -->
        <div class="row justify-content-center mb-4">
          <div class="col-md-6">
            <input type="text" class="form-control" placeholder="Search Pokémon cards..." id="searchBar">
          </div>
        </div>

        <div class="row align-items-center mb-3 border-bottom border-2 border-dark pb-2">
          <div class="col">
            <h2 class="pixel-font mb-0">Base Set</h2>
          </div>
        </div>

        <div class="d-flex align-items-center justify-content-between mb-4">
          <div><p class="mb-0"><strong>102 Cards</strong></p></div>
          <div class="d-flex justify-content-center flex-grow-1">
            <label class="form-check-label mx-3 mb-0">
              <input type="radio" name="filter" value="all" checked> All
            </label>
            <label class="form-check-label mx-3 mb-0">
              <input type="radio" name="filter" value="in"> In Collection
            </label>
            <label class="form-check-label mx-3 mb-0">
              <input type="radio" name="filter" value="notin"> Not in Collection
            </label>
          </div>
        </div>

        <div id="cardsContainer" class="row g-4 justify-content-center"></div>
      </div>
    `;
  }

    container.innerHTML = `
    <!-- Text Cards -->
  <div class="text-center mt-4">
    <h1 class="pixel-text">All Cards</h1>
  </div>

    <!-- Search Bar -->
    <div class="row justify-content-center mb-2 mt-5">
      <div class="col-md-6">
        <input
          type="text"
          class="form-control"
          placeholder="Search Pokémon cards..."
          id="searchBar"
        >
      </div>


    <!-- Cards row -->
    <div class="row justify-content-between text-center">
      <div id="cardsContainer" class="row g-4 justify-content-center">
      </div>
    </div>
    `;
  }

// This method sets up the search filter for the cards page
i wasnt able to get it to work, i would have to debug it more, in console it shows the search term and number of card elements, but it does not remove the cards that do not match the search term, it just shows all cards


    setupSearchFilter() {
    // Get the search input element and check if it exists
    const searchInput = document.getElementById("cardSearch");
    // If search input is not found, log a warning and return
    if (!searchInput) {
      console.warn("Search input not found");
      return;
    }

    // Add an event listener for input changes on the search input
    searchInput.addEventListener("input", (event) => {
      const searchTerm = event.target.value.trim(); // Get the trimmed search term from the input
      const cardElements = document.querySelectorAll(".card-col"); // Get all card elements with the class "card-col"

      console.log("Search term: –", searchTerm);
      console.log("Number of card elements: –", cardElements.length);

      // Function to get the regex for matching names based on the search term
      const regex = getNameMatchRegex(searchTerm);
      // Initialize counters for exact and partial matches
      let exactMatches = 0;
      let partialMatches = 0;

      // Loop through each card element and check if it matches the search term
      cardElements.forEach((col) => {
        const img = col.querySelector("img");
        const name = img?.alt || ""; // Get the alt text of the image as the card name, or an empty string if not found

        // Hide placeholder cards if the name is "Pokémon Card Back"
        if (name === "Pokémon Card Back") {
          col.style.display = "none";
          return;
        }

        // Test the name against the regex to see if it matches the search term
        const isMatch = regex.test(name);

        // Set the display style based on whether it matches the search term
        if (searchTerm === "") {
          col.style.display = "flex";
        } else if (isMatch) {
          col.style.display = "flex";
          partialMatches++;
          // Check for exact match
          if (name.toLowerCase() === searchTerm.toLowerCase()) {
            exactMatches++;
          }
          console.log("Showing: –", name);
        } else {
          col.style.display = "none";
          console.log("Hiding: –", name); //
        }
      });

      // Log the number of exact and partial matches
      if (searchTerm !== "") {
        console.log("Exact matches: –", exactMatches);
        console.log("Partial matches: –", partialMatches);
      } else {
        console.log("Empty search, show all cards");
      }
    });

}


*/

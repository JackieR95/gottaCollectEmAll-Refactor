/*
  COMPONENT FOR DISPLAYING A COLLECTION OF CARDS

  Props:
    - cardsArray: An array of card data to display
    - Card: The card component to use for each card in the array

  Functionality:
    - Creates a container element to hold the cards
    - Iterates through the cardsArray and creates a card element for each card using the provided Card component
    - Appends each card element to the container
    - Returns the container element

  Functionality to Add:
    - Get Collection to work
*/

import { Card } from "./Card.js";

export function CardContainer({ cards, label, onAddCard }) {
  const cardContainer = document.createElement("div");
  cardContainer.className = "row g-4 justify-content-center";

  // 1. Create the container div
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("text-center", "mt-4");

  // 2. Create the h1 heading
  const heading = document.createElement("h1");
  heading.classList.add("pixel-text");
  heading.textContent = label + " Set";

  const hrLine = document.createElement("hr");
  hrLine.className = "border-dark border-2";

  // 3. Append the heading to the container div
  containerDiv.appendChild(heading);
  containerDiv.appendChild(hrLine);
  cardContainer.appendChild(containerDiv);

  // Now, 'containerDiv' holds the entire structure and can be appended to the DOM.
  // Example: document.body.appendChild(containerDiv);
  // Transform raw card data into styled UI components with layout and button logic
  const nodes = cards.map((card) => {
    const cardId = card?.id || card?.cardId || "unknown-id";
    const cardName = card?.name || "Unknown Card";
    const cardImage =
      card?.images?.small || card?.image || "assets/images/cardBack.png";
    const initialCount = card?.count || 0;
    const marketPrice =
      card?.cardmarket?.prices?.averageSellPrice || card?.marketPrice || 0;

    return Card({
      id: cardId,
      name: cardName,
      image: cardImage,
      count: initialCount,
      price: marketPrice,
      onAdd: (cardObj) => {
        if (onAddCard) {
          onAddCard(cardObj);
        }
      },
    });
  });

  nodes.forEach((cardNode) => {
    const col = document.createElement("div");
    col.className =
      "col-6 col-sm-4 col-md-3 col-lg-5th d-flex flex-column align-items-center card-col";
    col.appendChild(cardNode);
    cardContainer.appendChild(col);
  });

  return cardContainer;
}

/*
  // This method adds a card to the collection in localStorage
  addToCollection(card) {
    // Get the collection from localStorage, or initialize it as an empty object if not found
    const collection = JSON.parse(localStorage.getItem("myCollection") || "{}");

    // Check if the card ID exists in the collection then increment the count, otherwise add it with count 1
    if (collection[card.id]) {
      collection[card.id].count += 1;
    } else {
      collection[card.id] = {
        count: 1,
        image: card.images.small,
        name: card.name,
        price: card.cardmarket?.prices?.averageSellPrice || 0, // get average sell price if available
      };
    }

    // Update the collection in localStorage
    localStorage.setItem("myCollection", JSON.stringify(collection));
  }
  */

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
*/

import { Card } from "./Card.js";


export function CardContainer({ cards }) {
  const cardContainer = document.createElement("div");
  cardContainer.className = "row g-4 justify-content-center";

  let nodes = cards.map((card) => {

    const cardId = card?.id || card?.cardId || "unknown-id";
    const cardName = card?.name || "Unknown Card";
    const cardImage = card?.images?.small || card?.image || "assets/images/cardBack.png";
    const initialCount = card?.count || 0;

    return Card({
      id: cardId,
      name: cardName,
      image: cardImage,
      count: initialCount
    });
  });


  nodes.forEach((cardNode) => {
    cardContainer.appendChild(cardNode);
  });



/*
  const col = document.createElement("div");
  col.className = "col-6 col-sm-4 col-md-3 col-lg-5th d-flex flex-column align-items-center card-col";
  col.appendChild(card);
  cardContainer.appendChild(col);

*/



  return cardContainer;
}
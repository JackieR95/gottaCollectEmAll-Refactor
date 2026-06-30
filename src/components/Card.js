/*
  CARD COMPONENT
  ToAddFunctionality:
    - Handle the increment and decrement of the card count
    - Add the card to the collection when the "Add" button is clicked

  OptionalChanges:
   - Change "Add" to "Update" when the card is already in the collection
   - Disable the "Add" button when no click of plus has happened
*/

import { Counter } from "./Counter";

/**
 * Reusable component for a single card object
 * @param {object} cardData - The configuration object for the card.
 * @param {number} cardData.id - Unique id for each card.
 * @param {string} cardData.name - Card name.
 * @param {string} cardData.image - Image URL for each individual card.
 * @returns {HTMLElement} The completed DOM container for the card.
 */
export function Card({ id, name, image, count }) {
  // Create div to hold the card and its attributes
  const cardContainer = document.createElement("div");
  cardContainer.className = "card-wrapper text-center p-3";

  let cardCount = count;

  // Create the Image element with attributes for each card and append to cardContainer
  const img = document.createElement("img");
  img.src = image;
  img.alt = name;
  img.className = "img-fluid mb-3";
  img.style.maxHeight = "200px";
  img.loading = "lazy";
  cardContainer.appendChild(img);

  // Displays name of Pokémon Card and appends to cardContainer
  const nameElement = document.createElement("h3");
  nameElement.className = "card-name h5 mb-2";
  nameElement.textContent = name;
  cardContainer.appendChild(nameElement);

  const counterElement = Counter({
    count: cardCount
  })

  cardContainer.appendChild(counterElement);


  // Append the entire counter section to the main container
  // cardContainer.appendChild(counterDiv);

  return cardContainer;

}

  /*
    addButton.addEventListener("click", () => {
      const count = parseInt(counter.textContent, 10) || 0;

      // Check if the card has an ID and count is greater than 0
      if (card?.id && count > 0) {
        for (let i = 0; i < count; i++) {
          this.addToCollection(card); // Add the card to the collection
        }
        // Reset counter to 0
        counter.textContent = "0";

        // Show toast
        this.showToast(
          `${count} ${card.name} card${count > 1 ? "s" : ""
          } added to your collection!`
        );
      }
    });


  const handleAdd = () => {
    currentCount = currentCount || 0;
  }
*/
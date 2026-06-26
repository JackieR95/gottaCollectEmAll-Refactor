/*
  CARD COMPONENT

  Props:
    - name: The name of the card
    - image: The URL of the card's image
    - count: The number of this card in the collection or if it's a new card, the initial count

  Functionality:
    - Creates a card element with the specified properties

  ToAddFunctionality:
    - Handle the increment and decrement of the card count
    - Add the card to the collection when the "Add" button is clicked

  OptionalChanges:
   - Change "Add" to "Update" when the card is already in the collection
   - Disable the "Add" button when no click of plus has happened
*/

import { Button } from "./Button.js";

export function Card({ id, name, image, count, }) {
  // 1. Create the top-level container element (e.g., a div)
  const cardContainer = document.createElement("div");
  cardContainer.className = "card-wrapper text-center p-3";

  // Declare a count variable that can be updated
  let currentCount = count;


  // 2. Create the Image element
  const img = document.createElement("img");
  img.src = image;
  img.alt = name;
  img.className = "img-fluid mb-3";
  img.style.maxHeight = "200px";
  img.loading = "lazy";
  cardContainer.appendChild(img);

  // 3. This matches your visible card title/name placement
  const nameElement = document.createElement("h3");
  nameElement.className = "card-name h5 mb-2";
  nameElement.textContent = name;
  cardContainer.appendChild(nameElement);


  // Append the entire counter section to the main container
  cardContainer.appendChild(counterDiv);

  // 8. Create and append the Add button node using your component
  const addBtn = Button({
    label: "Add",
    classNames: "add-card w-100 mt-2",
    primaryBtn: true
  });
  cardContainer.appendChild(addBtn);

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
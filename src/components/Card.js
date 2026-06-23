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
   - Disable the "Add" button when the card is already in the collection
*/

import { Button } from "./Button.js";

export function Card({ id, name, image, count }) {
  // 1. Create the top-level container element (e.g., a div)
  const cardContainer = document.createElement("div");
  cardContainer.className = "card-wrapper text-center p-3";

  let currentCount = count;



  // 2. Create the Image element
  const img = document.createElement("img");
  img.src = image;
  img.alt = name;
  img.className = "img-fluid mb-3";
  img.style.maxHeight = "200px";
  cardContainer.appendChild(img);

  // 3. This matches your visible card title/name placement
  const nameElement = document.createElement("h3");
  nameElement.className = "card-name h5 mb-2";
  nameElement.textContent = name;
  cardContainer.appendChild(nameElement);

  // 4. Create the d-flex counter container
  const counterDiv = document.createElement("div");
  counterDiv.className = "d-flex align-items-center justify-content-center gap-2 mb-2";

/*
      // Add event listeners to the buttons
    decrementBtn.addEventListener("click", () => {
      let value = parseInt(counter.textContent, 10);
      if (value > 0) counter.textContent = value - 1;
    });

    incrementBtn.addEventListener("click", () => {
      let value = parseInt(counter.textContent, 10);
      counter.textContent = value + 1;
    });

    addButton.addEventListener("click", () => {
      const count = parseInt(counter.textContent, 10) || 0;

*/
  // 5. Use your imported Button component to create the Decrement button node
  const decBtn = Button({
    label: "-",
    classNames: "decrement"
  });
  counterDiv.appendChild(decBtn);

  // 6. Create the Counter span
  const counterSpan = document.createElement("span");
  counterSpan.className = "counter";
  counterSpan.textContent = count; // Your count variable
  counterDiv.appendChild(counterSpan);

  // 7. Use your imported Button component to create the Increment button node
  const incBtn = Button({
    label: "+",
    classNames: "increment"
  });
  counterDiv.appendChild(incBtn);

  // Append the entire counter section to the main container
  cardContainer.appendChild(counterDiv);

  // 8. Create and append the Add button node using your component
  const addBtn = Button({
    label: "Add",
    classNames: "add-card w-100 mt-2",
    primaryBtn: true
  });
  cardContainer.appendChild(addBtn);

  // Now cardContainer holds the entire node tree structure!
  // You can append it to your main page layout like this:
  // document.getElementById('catalog').appendChild(cardContainer);

  return cardContainer;
}
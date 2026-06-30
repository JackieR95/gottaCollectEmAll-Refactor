/* Fix Issues:
Button 'Add' is larger on images with name of card that is larger then 145px x 24px
*/

import { Button } from "./Button.js";

/**
 * Reusable Counter component with increment & decrement controls.
 * @param {object} counterData - The configuration object for the counter.
 * @param {number} counterData.count - The Initial count value to display.
 * @returns {HTMLElement} The completed DOM element container for the counter
 */
export function Counter({ count }) {
  // 4. Create the d-flex counter container
  const counterDiv = document.createElement("div");
  counterDiv.className =
    "counter-container text-center mb-2";

  let currentCount = count;

  // 6. Create the Counter span
  const counterSpan = document.createElement("span");
  counterSpan.className = "counter mx-2 align-middle";
  counterSpan.textContent = currentCount; // Your count variable

  // Add event listeners to the buttons
  const handleMinus = () => {
    if (currentCount > 0) {
      currentCount -= 1;
    }
    counterSpan.textContent = currentCount;
  };

  // Add event listeners to the buttons
  const handlePlus = () => {
    currentCount += 1;
    counterSpan.textContent = currentCount;
  };

  // 5. Use your imported Button component to create the Decrement button node
  const decBtn = Button({
    label: "-",
    classNames: "decrement",
    onClick: handleMinus,
  });

  // 7. Use your imported Button component to create the Increment button node
  const incBtn = Button({
    label: "+",
    classNames: "increment",
    onClick: handlePlus,
  });
  counterDiv.appendChild(incBtn);

  // 8. Create and append the Add button node using your component
  const addBtn = Button({
    label: "Add",
    classNames: "add-card w-50 mt-2",
    primaryBtn: true,
  });

  counterDiv.appendChild(decBtn);
  counterDiv.appendChild(counterSpan);
  counterDiv.appendChild(incBtn);

  const buttonWrapper = document.createElement("div");
  buttonWrapper.className = "d-flex justify-content-center mt-2";

  buttonWrapper.appendChild(addBtn);
  counterDiv.appendChild(buttonWrapper);

  return counterDiv;
}

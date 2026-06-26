//import Button

export function Counter() {

      // 4. Create the d-flex counter container
  const counterDiv = document.createElement("div");
    counterDiv.className = "d-flex align-items-center justify-content-center gap-2 mb-2";


  // 6. Create the Counter span
  const counterSpan = document.createElement("span");
  counterSpan.className = "counter";
  counterSpan.textContent = currentCount; // Your count variable
    counterDiv.appendChild(counterSpan);

      // 5. Use your imported Button component to create the Decrement button node
      const decBtn = Button({
        label: "-",
        classNames: "decrement",
        onClick: handleMinus
      });
      counterDiv.appendChild(decBtn);

      // 6. Create the Counter span
      const counterSpan = document.createElement("span");
      counterSpan.className = "counter";
      counterSpan.textContent = currentCount; // Your count variable
      counterDiv.appendChild(counterSpan);

      // 7. Use your imported Button component to create the Increment button node
      const incBtn = Button({
        label: "+",
        classNames: "increment",
        onClick: handlePlus
      });
    counterDiv.appendChild(incBtn);

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


}

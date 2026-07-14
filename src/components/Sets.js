export function Sets({ setId, setName }) {
  const setContainer = document.createElement("div");
  setContainer.className = "d-flex flex-column set-header mb-4";

  const setLink = document.createElement("a");

  setLink.href = `cards.html?set=${setId}`;
  setLink.className = "set-link fs-4 mb-2";
  setLink.textContent = setName;

  const hrElement = document.createElement("hr");
  hrElement.className = "custom-hr mt-2 mb-2";

  setContainer.appendChild(setLink);
  setContainer.appendChild(hrElement);

  return setContainer;
}

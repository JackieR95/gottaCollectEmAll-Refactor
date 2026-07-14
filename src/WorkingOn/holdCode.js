/*
const imgUrl = "assets/images/cardBack.png";
const altText = "Preview Image";

// Function to create a card preview element
function createCardPreviewElement(imgUrl, altText) {

  // create a column element that creates a div when the used
  const col = document.createElement("div");

  // Set the class names for the column to ensure proper layout in Bootstrap using col to wrap the card preview in a div
  col.className = "col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center";

  // Set the inner HTML of the column to include a card preview with an image wrapped in a div
  col.innerHTML = `
    <div class="card-preview">
      <img src="${imgUrl}" alt="${altText}" class="img-fluid">
    </div>
  `;

  // Return the column element
  return col;
}
  */


/*
// Function to render the top expensive cards in the specified container
function renderTopExpensiveCards(containerId, count) {
  // Get the container element by its ID and clear its content
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  // Fetch the top expensive cards from the Pokémon TCG API
  const apiUrl = "https://api.pokemontcg.io/v2/cards?q=set.id:base1";

  // Fetch the data from the API
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Check if the data is valid and contains cards
      const cards = data.data;

      // Filter the cards to find those with an average sell price and sort them by price in descending order
      const cardsWithPrices = cards
        .filter(card => card.cardmarket?.prices?.averageSellPrice) // Ensure the card has a price
        .sort((a, b) => b.cardmarket.prices.averageSellPrice - a.cardmarket.prices.averageSellPrice) // Sort by price in descending order
        .slice(0, count); // Limit to the specified count

      // If no cards found, log a message and return
      cardsWithPrices.forEach((card) => {
        const img = card.images?.small || "assets/images/cardBack.png"; // Fallback image if no image is available
        const alt = card.name || "Card"; // Use the card name as alt text, or fallback to "Card" if not available
        const col = createCardPreviewElement(img, alt); // Create a card preview element with the image and alt text
        container.appendChild(col); // Append the card preview element to the container
      });
    })
    .catch(err => {
      // Log the error if the API call fails
      console.error("Failed to load top cards:", err);
      // If the API call fails, render placeholders instead
      for (let i = 0; i < count; i++) {
        // Create and append a placeholder card preview element
        container.appendChild(createCardPreviewElement());
      }
    });
}
*/

/*
// Function to render a preview of the user's collection
function renderMyCollectionPreview(containerId, count) {
  // Get the container element by its ID and clear its content
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  // Retrieve the user's collection from localStorage
  const collection = JSON.parse(localStorage.getItem("myCollection") || "{}");
  const collectedCards = Object.values(collection);

  // If no cards are collected, show placeholders
  if (collectedCards.length === 0) {
    // Show placeholders
    for (let i = 0; i < count; i++) {
      container.appendChild(createCardPreviewElement());
    }
  } else {
    // If there are collected cards, create card preview elements for the specified count
    collectedCards.slice(0, count).forEach(card => {
      // Create a card preview element with the card's image and name
      const col = createCardPreviewElement(card.image, card.name);
      container.appendChild(col); // Append the card preview element to the container
    });
  }
}
*/

/*
            <!-- <div id="setsList" class="text-start mx-auto" style="max-width: 600px;"></div></div> -->

              <!-- Progress Bar for Base Set
              <div class="d-flex flex-column align-items-center mb-1">
                <div class="progress w-100 custom-progress">
                  <div
                    class="progress-bar custom-progress-bar"
                    style="width: 3%;"
                    role="progressbar"
                    aria-valuenow="3"
                    aria-valuemin="0"
                    aria-valuemax="100">
                  </div>
                </div>
                <div class="w-100 text-end text-muted custom-progress-text mt-1">3 / 102</div>
              </div>
              -->
              */

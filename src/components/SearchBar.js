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

/* html code for search bar
        <!--<div id="cards-container"></div>-->

            <!-- Text Cards -->


            <!-- Search Bar // Commented out search bar because of time and because i couldnt get it to work
            <div class="row justify-content-center mb-2 mt-5">
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search Pokémon cards..."
                  id="searchBar"
                >
              </div>


             Card count text // Commented out for now becaus of time
            <div style="font-size: 1.1rem; font-weight: 600;">
              1 / 100 Cards
            </div>
            -->
*/
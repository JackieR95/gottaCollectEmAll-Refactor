export function Collection() {

 return `
        <div class="container mt-4">

          <!-- Collection Header with back button -->
          <div class="row align-items-center mb-3 border-bottom border-2 border-dark pb-2">
            <div class="col">
              <a href="sets.html" class="btn pixel-font btn-outline-dark btn-sm mb-2">← Back</a>
              <h2 class="pixel-font mb-0">My Collection</h2>
            </div>
          </div>

          <p><strong>Total Cards: </strong><span id="totalCardsCount">0</span></p>

          <div id="cardsContainer" class="row g-4 justify-content-center"></div>
        </div>`;
}


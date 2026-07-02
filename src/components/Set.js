export function Set({ name }) {

 return `
        <div class="container mt-4">
          <!-- Back Button -->
          <a href="sets.html" class="btn pixel-font btn-outline-dark btn-sm mb-2">← Back</a>

          <div class="row align-items-center mb-3 border-bottom border-2 border-dark pb-2">
            <div class="col">
              <h2 class="pixel-font mb-0">${name}</h2>
            </div>
          </div>

          <div id="cardsContainer" class="row g-4 justify-content-center"></div>
        </div>`;
}

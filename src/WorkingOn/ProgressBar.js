/*// Function to update the base set progress bar

/*
Tried to calculate the progress of the base set collection based on the cards that are distinct kept inside the localStorage.
It wouldnt update the progress bar, so I commented it out.
Most likely because it's being called before the DOM is fully loaded or the localStorage is not set up correctly or i'm not using the correct class names or IDs.



function updateBaseSetProgressBar() {
  const collection = JSON.parse(localStorage.getItem("myCollection") || "{}");

  const baseSetId = "base1";
  const maxCards = 102;

  // Get distinct base1 cards from the collection
  const distinctBaseCards = Object.values(collection).filter(card => card.setId === baseSetId);
  const distinctCount = distinctBaseCards.length;

  // Calculate percentage
  const percentage = Math.min((distinctCount / maxCards) * 100, 100);

  // Update progress bar (same class as Sets page uses)
  const progressBar = document.querySelector(".progress-bar.custom-progress-bar");
  // Update the width and aria attributes of the progress bar
  if (progressBar) {
    progressBar.style.width = `${percentage}%`;
    progressBar.setAttribute("aria-valuenow", Math.floor(percentage));
  }

  // Update text like "3 / 102"
  const progressText = document.querySelector(".custom-progress-text");
  if (progressText) {
    progressText.textContent = `${distinctCount} / ${maxCards}`;
  }

  // Update the % shown in the header (e.g. "5%")
  const percentText = document.querySelector(".set-header .text-muted.fs-5");
  if (percentText) {
    percentText.textContent = `${Math.floor(percentage)}%`;
  }
} */
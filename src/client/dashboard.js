/*
Modified by: Jacqueline Rael
Date: 06/11/2025
Lab: Final Project - GottaCollectEmAll
*/


// import the general styles and scripts
import "../utility/general.js";

// Import the navbar loading function
import { Navbar } from "../components/Navbar.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("navbar-container");
  // If currentPage is not provided, default to an empty string
  if (container) {
    container.innerHTML = Navbar("dashboard");
  } // Load the navbar HTML into the container
  updateDashboardStats(); // Update the dashboard stats on page load
});


//Update the dashboard stats based on the localStorage collection
function updateDashboardStats() {

  // Retrieve the collection from localStorage
  const collection = JSON.parse(localStorage.getItem("myCollection") || "{}");

  // If no collection exists, initialize it
  let totalCount = 0;
  let totalValue = 0;
  // Calculate total number of distinct cards and their total value
  const distinctCount = Object.keys(collection).length;

  // Iterate through the collection to calculate total count and value
  for (const card of Object.values(collection)) {
    totalCount += card.count;
    totalValue += card.count * (card.price || 0);
  }

  // If no cards in collection, set totalCount and totalValue to 0
  // Update total number and value
  document.querySelector(".totalNumber").textContent = totalCount;
  document.querySelector(".totalCost").textContent = `$${totalValue.toFixed(2)}`;

  // Progress bar setup using DISTINCT count and calculating percentage
  const maxCards = 102;
  const percentage = Math.min((distinctCount / maxCards) * 100, 100);

  // Update the progress bar width and aria attributes
  const progressBar = document.querySelector(".progress-bar");
  progressBar.style.width = `${percentage}%`;
  progressBar.setAttribute("aria-valuenow", Math.floor(percentage));

  // Update text like "3 / 102"
  const progressText = document.querySelector(".w-75.text-end");
  progressText.textContent = `${distinctCount} / ${maxCards}`;
}
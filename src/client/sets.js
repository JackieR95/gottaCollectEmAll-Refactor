/*
Modified by: Jacqueline Rael
Date: 06/11/2025
Lab: Final Project - GottaCollectEmAll
*/

// Shared CSS (Bootstrap + your styles)
import "../utility/general.js";
import { TcgClient } from "react";
import { TcgSetsRequest } from "../api/pokemon/TcgSetsRequest.js";
import { Sets } from "../components/Sets.js";

// Import the navbar HTML and load it
import { Navbar } from "../components/Navbar.js";

// Function to load the navbar and load the top expensive cards and my collection preview for the Sets page
document.addEventListener("DOMContentLoaded", async () => {
  const containerNavbar = document.getElementById("navbar-container");
  const setContainer = document.getElementById("set-container");
  // If currentPage is not provided, default to an empty string
  if (setContainer) {
    containerNavbar.innerHTML = Navbar("sets");
  }

  let client = new TcgClient(POKEMON_TCG_KEY);
  let setsRequest = new TcgSetsRequest();

  let setResponse = await client.send(setsRequest);
  let allSets = setResponse.sets();



  allSets.forEach((setObj) => {
    setsRequest.getParams(setObj.id, setObj.name);
    console.log(`Processing Set -> ID: ${setObj.id} | Name: ${setObj.name}`);

    // 2. This variable is created fresh for every single set in the loop
    const setElement = Sets({
      setId: setObj.id,
      setName: setObj.name,
    });

    setContainer.appendChild(setElement);
  });

  //renderTopExpensiveCards("setPreviewContainer", 5);// Top 5 expensive base set cards
  //renderMyCollectionPreview("myCollectionContainer", 5); // My collection preview
  //updateBaseSetProgressBar(); // Update the base set progress bar, commented out as it wasn't working for me //
});

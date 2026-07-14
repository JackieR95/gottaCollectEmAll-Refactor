//////////////////////////////////////// Toast Handling //////////////////////////////////////////////////////

// // This method shows a toast message at the top right corner of the screen when a card is added to the collection
// function showToast(message) {
//   // Remove any existing toast message to avoid duplicates
//   const existingToast = document.getElementById("toast-message");
//   if (existingToast) existingToast.remove(); // Remove existing toast if present

//   // Create a new toast message element
//   const toast = document.createElement("div");
//   toast.id = "toast-message";
//   toast.className =
//     "toast-message position-fixed top-0 end-0 m-4 p-3 bg-dark text-white rounded shadow";
//   toast.style.zIndex = "1055";
//   toast.textContent = message; // Set the message text

//   // Append the toast to the body
//   document.body.appendChild(toast);

//   // Automatically remove the toast after 3 seconds
//   setTimeout(() => {
//     toast.remove();
//   }, 3000);
// }

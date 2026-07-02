/*
Modified by: Jacqueline Rael
Date: 06/11/2025
Lab: Final Project - GottaCollectEmAll
*/

// Function to load the navbar HTML and set the active link based on the current page
export function Navbar(currentPage) {
  const paths = [
    {
      label: "Dashboard",
      path: "./",
    },
    {
      label: "Sets",
      path: "./sets.html",
    },
    {
      label: "Cards",
      path: "./cards.html",
    },
  ];

    const links = paths.map((link) => {
    if (currentPage = link.path) {
        link.isActive = true;
    }

    return NavbarLink(link);

  });
  // if (currentPage === DASHBOARD_PATH) {
  //     dashboardLinkClass = "active";
  // } else if (currentPage === )

  return `
        <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="./">
                <img src="assets/images/pokebollLogo.png" alt="Pokéball" width="30" height="30" class="d-inline-block align-text-top">
                Gotta Collect 'Em All
            </a>
            </button>
            <div class="container-fluid" id="navbarNav">
                <ul class="navbar-nav">
                    ${links.join("")}
                </ul>
            </div>
        </nav>
    `;
  function NavbarLink({ isActive = false, path, label }) {
    let activeClass = isActive ? "active" : "";

    return `
        <li class="nav-item ${activeClass}">
            <a class="nav-link" href="${path}">${label}</a>
        </li>
        `;
  }

}

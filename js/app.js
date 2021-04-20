/**
 * End Global Variables
 * Start Helper Functions
 *
 */
const createFragment = document.createDocumentFragment();
const scetions = document.querySelectorAll("section");
function navBarItem(id, name) {
  const navItem = `<a class ="menu__link" href='#${id}'>${name}</a>`;
  return navItem;
}
function navBarCreation() {
  for (let i = 0; i < scetions.length; i++) {
    const newItem = document.createElement("li");
    const itemName = scetions[i].getAttribute("data-nav");
    const itemId = scetions[i].getAttribute("id");
    newItem.innerHTML = navBarItem(itemId, itemName);
    createFragment.appendChild(newItem);
  }
  const navBar_List = document.getElementById("navbar__list");
  navBar_List.appendChild(createFragment);
}
navBarCreation();
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as activ

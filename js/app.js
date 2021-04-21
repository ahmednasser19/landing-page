/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

//create a document fregment for saving the new items of
const createFragment = document.createDocumentFragment();
//get all the sections i HTML page and save it in sections

const scetionsList = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// create an item in the nav bar and link it to its section in the page
function navBarItem(id, name) {
  const navItem = `<a class ="menu__link" href='#${id}'>${name}</a>`;
  return navItem;
}
//declearation if viewPort  function
function viewPortSection(elem) {
  let sectionBounding = elem.getBoundingClientRect();
  return (
    sectionBounding.top >= 0 &&
    sectionBounding.left >= 0 &&
    sectionBounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    sectionBounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
// function for creating the nav bar

function navBarCreation() {
  //loop through the sections of our files

  for (let i = 0; i < scetionsList.length; i++) {
    // get the id and save it to the item id
    const itemId = scetionsList[i].getAttribute("id");
    //create item for each one
    const newItem = document.createElement("li");

    //get item name from data-nav attribute
    const itemName = scetionsList[i].getAttribute("data-nav");

    newItem.innerHTML = navBarItem(itemId, itemName);

    //ad every new item in the navbar through the loop in createfragment
    createFragment.appendChild(newItem);
  }
  const navBar_List = document.getElementById("navbar__list");

  //add the the ites for the loop to the html navbar
  navBar_List.appendChild(createFragment);
}

navBarCreation();

// Add class 'active' to section when near top of viewport
function setActiveClass() {
  for (let i = 0; i < scetionsList.length; i++) {
    //if the section is in veiw port
    if (viewPortSection(scetionsList[i])) {
      if (scetionsList[i].classList.contains("your-active-class")) {
        //add your active class to the given view port
        scetionsList[i].className = "";
      } else {
        // remove that given class
        scetionsList[i].className = "your-active-class";
      }
    }
  }
}

//add active class when top on scrilling
document.addEventListener("scroll", setActiveClass);
// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as activ

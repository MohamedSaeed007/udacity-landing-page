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

const sections = document.querySelectorAll('section');
const navbarList = document.getElementById('navbar__list');
const fragment  = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Main Functions
 * 
*/


// build the nav and scroll to anchor
sections.forEach((section)=>{
    liElement = document.createElement('li');
    aElement = document.createElement('a');
    aElement.textContent = section.getAttribute('data-nav');
    aElement.className = 'menu__link';
    liElement.appendChild(aElement);
    // Scroll to section on link click
    aElement.addEventListener("click",()=>{
        section.scrollIntoView({behavior:"smooth"});
    });
    fragment.appendChild(liElement);
});

// Add class 'active' to section when near top of viewport
const activeSectionFunction = () => {
    sections.forEach((sec)=>{
        const rect = sec.getBoundingClientRect();
        const links = document.querySelectorAll('a');
        if(rect.top > 0 && rect.top < 300){
            links.forEach((link)=>{
                if(link.textContent == sec.getAttribute('data-nav')){
                    link.classList.add("your-active-class");
                } else {
                    link.classList.remove("your-active-class");
                }
            });
            sec.classList.add("your-active-class");
        } else {
            sec.classList.remove("your-active-class");
        }
    });
}

// Build menu 
navbarList.appendChild(fragment);

// Set sections as active
window.addEventListener("scroll",activeSectionFunction);


/**
 * End Main Functions
 * 
*/



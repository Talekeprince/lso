
// nav bar validation
// variables
const menuBtn = document.querySelector('#nav-menu');
const closeMenuBtn = document.querySelector('.close-menu');
const menuDOM = document.querySelector('.menu');
const menuOverlay = document.querySelector('.menu-overlay');
const menuItems = document.querySelector('.menu-item');
const menuContent = document.querySelector('.menu-contents');
const homeBtn = document.querySelector("#home-btn");

// menu overlay open and close start
menuBtn.addEventListener("click", function () {
    menuOverlay.classList.add("transparentBcg");
    menuDOM.classList.add("showMenu");
})
closeMenuBtn.addEventListener("click", function () {
    menuOverlay.classList.remove("transparentBcg");
    menuDOM.classList.remove("showMenu");
})
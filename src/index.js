import "./style.css";

import Content from "./content.js"

import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";
import loadAboutPage from "./about.js";

console.log("Bundling is working");


const nav = document.querySelector('nav');
const navButtons = document.querySelectorAll('nav > button');

navButtons.forEach((button) => {
  button.addEventListener('click', Content.clearContent);
});





document.querySelector('#home-nav').addEventListener('click', loadHomePage);
document.querySelector('#menu-nav').addEventListener('click', loadMenuPage);
document.querySelector('#about-nav').addEventListener('click', loadAboutPage);

loadHomePage();

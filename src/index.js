import "./style.css";

import loadHomePage from "./home.js";

console.log("Bundling is working");

const content = document.querySelector('div#content');

loadHomePage();

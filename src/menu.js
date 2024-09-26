import Content from "./content.js"


function loadPage() {
  let contentDiv = document.createElement('div');

  let title = contentDiv.appendChild(document.createElement('h1'));
  let heading = contentDiv.appendChild(document.createElement('h2'));

  title.innerText = "Menu";

  heading.innerText = "This is the menu heading!"

  Content.setContent(contentDiv.childNodes);
}


export default loadPage;
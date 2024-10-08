import Content from "./content.js"

import pictureOfV from "./female-v-cyberpunk.jpg";


function loadPage() {
  let contentDiv = document.createElement('div');

  let title = contentDiv.appendChild(document.createElement('h1'));
  let image = contentDiv.appendChild(document.createElement('img'));
  let desc = contentDiv.appendChild(document.createElement('h3'));
  let tag = contentDiv.appendChild(document.createElement('h2'));

  title.innerText = "V's Diner";

  image.src = pictureOfV;
  image.alt = "The female version of V from Cyberpunk 2077";
  image.width = image.height = "500";

  desc.innerText = "Best side dishes in all of Watson!";

  tag.innerText = "Hungry? Come to V's!";
  
  Content.setContent(contentDiv.childNodes);
}


export default loadPage;

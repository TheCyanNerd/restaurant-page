import Content from "./content.js"

import pictureOfV from "./female-v-cyberpunk.jpg"


function loadPage() {
  let contentDiv = document.createElement('div');

  let title = contentDiv.appendChild(document.createElement('h1'));
  let image = contentDiv.appendChild(document.createElement('img'));

  title.innerText = "About";
  
  image.src = pictureOfV;
  image.alt = "The female version of V from Cyberpunk 2077";
  image.width = image.height = "500";

  Content.setContent(contentDiv.childNodes);
}


export default loadPage;
import pictureOfV from "./female-v-cyberpunk.jpg";

function loadPage() {
  let title = content.appendChild(document.createElement('h1'));
  let image = content.appendChild(document.createElement('img'));
  let desc = content.appendChild(document.createElement('h3'));
  let tag = content.appendChild(document.createElement('h2'));

  title.innerText = "V's Diner";

  image.src = pictureOfV;
  image.alt = "The female version of V from Cyberpunk 2077";
  image.width = image.height = "500";

  desc.innerText = "Best side dishes in all of Watson!";

  tag.innerText = "Hungry? Come to V's!";
}

export default loadPage;

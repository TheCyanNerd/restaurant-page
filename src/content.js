const content = document.querySelector('div#content');

function clearContent() {
  content.replaceChildren();
};

function setContent(nodes) {
  content.replaceChildren(...nodes);
};


export default { clearContent, setContent, };
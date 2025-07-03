onload = function () {
  let parent = document.getElementById("drag");
  let frag = document.createDocumentFragment();
  while (parent.children.length) {
    frag.appendChild(
      parent.children[Math.floor(Math.random() * parent.children.length)]
    );
  }
  parent.appendChild(frag);
};
function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}
function dropOver(event) {
  event.preventDefault();
}
function drop(event) {
  let data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}

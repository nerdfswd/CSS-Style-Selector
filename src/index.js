const bdrRadius = document.getElementById("borderRadius");
const bdrThickness = document.getElementById("borderThickness");
const bdrColor = document.getElementById("borderColor");
const fillColor = document.getElementById("fillColor");
const shape = document.querySelector(".shape");

function adjustRadius() {
  shape.style.borderRadius = bdrRadius.value + "%";
}

function changeColour() {
  shape.style.borderColor = bdrColor.value;
  shape.style.backgroundColor = fillColor.value;
}

function adjustThickness() {
  console.log(bdrThickness.value);
  shape.style.borderWidth = bdrThickness.value + "px";
}

bdrRadius.addEventListener("input", adjustRadius);
bdrColor.addEventListener("input", changeColour);
bdrThickness.addEventListener("input", adjustThickness);
fillColor.addEventListener("input", changeColour);

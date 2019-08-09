/**
* Increase the width of HTML element during onmouseenter event
*/
function mouseOver(myElement, size) {
  myElement.setAttribute("style", "opacity: 1; width: " + size + "%;");
}

/**
* Decrease the width of HTML element during onmouseleave event
*/
function mouseOut(myElement, size) {
  myElement.setAttribute("style", "opacity: 1; width: " + size +"%;");
}

// var myElement = document.getElementById("bridget");
//
// myElement.onmouseover = function() {mouseOver()};
// myElement.onmouseout = function() {mouseOut()};

function mouseOver(myElement, size) {
  myElement.setAttribute("style", "width: " + size + "%;");
}

function mouseOut(myElement, size) {
  myElement.setAttribute("style", "width: " + size +"%;");
}

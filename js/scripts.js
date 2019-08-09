var myElement = document.getElementById("bridget");

myElement.onmouseover = function() {mouseOver()};
myElement.onmouseout = function() {mouseOut()};

function mouseOver() {
  myElement.setAttribute("style", "width: 100%;");
}

function mouseOut() {
  myElement.setAttribute("style", "width: 30%;");
}

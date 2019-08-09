var myElement = document.getElementById("home-tab");

myElement.onmouseover = function() {mouseOver()};
myElement.onmouseout = function() {mouseOut()};

function mouseOver() {
  myElement.setAttribute("style", "font-style: italic; font-size: 40px; color: red; background-color: #383838");
}

function mouseOut() {
  myElement.setAttribute("style", "font-style: normal; font-size: 30px; color: #337ab7;");
}

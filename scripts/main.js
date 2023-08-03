var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/occy.png") {
    myImage.setAttribute("src", "images/chadge.jpg");
  } else {
    myImage.setAttribute("src", "images/occy.png");
  }
};
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Poison BV Occultist, " + myName;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Poison BV Occultist, " + storedName;
  }
  myButton.onclick = function () {
    setUserName();
  };
// Create a circle and center it on the page. 

// When you hover on the circle, you will see a message under it : "you are in the circle".

// When the mouse leaves the circle you will see the message under it : "you are outside of the circle".

// When you click on the circle, the background will change to gray.

// When you double-click on the circle, the background will change to blue. 



document.getElementById("circle").addEventListener("mouseover", mouseIn);
document.getElementById("circle").addEventListener("mouseout", mouseOut);
document.getElementById("circle").addEventListener("click", mouseClick);
document.getElementById("circle").addEventListener("dblclick", doubleClick);

function mouseIn() {
  document.getElementById("circleText").innerHTML = "You are in the circle";
}

function mouseOut() {
  document.getElementById("circleText").innerHTML = "You are outside of the circle";
}

function mouseClick() {
  document.getElementById("circle").style.backgroundColor = "gray";
}

function doubleClick() {
  document.getElementById("circle").style.backgroundColor = "blue";
}
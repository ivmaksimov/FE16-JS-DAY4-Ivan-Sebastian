// Ex 1


// Create a Javascript program that will make the Santa Clauses disappear on a click from the following 3x3 matrix. Only the clicked Santa Claus should disappear.

let pic1 = document.getElementById("pic1");
// pic1.addEventListener("click" , disappear1, false);
let pic2 = document.getElementById("pic2");
pic2.addEventListener("click" , disappear2, false);
let pic3 = document.getElementById("pic3");
// pic3.addEventListener("click" , disappear3, false);
let pic4 = document.getElementById("pic4");
// pic4.addEventListener("click" , disappear4, false);
let pic5 = document.getElementById("pic5");
pic5.addEventListener("click" , disappear5, false);
let pic6 = document.getElementById("pic6");
// pic6.addEventListener("click" , disappear6, false);
let pic7 = document.getElementById("pic7");
pic7.addEventListener("click" , disappear7, false);
let pic8 = document.getElementById("pic8");
// pic8.addEventListener("click" , disappear8, false);
let pic9 = document.getElementById("pic9");
pic9.addEventListener("click" , disappear9, false);

function disappear1() {
  pic1.style.display = "none";
};
function disappear2() {
  pic2.style.display = "none";
};
function disappear3() {
  pic3.style.display = "none";
};
function disappear4() {
  pic4.style.display = "none";
};
function disappear5() {
  pic5.style.display = "none";
};
function disappear6() {
  pic6.style.display = "none";
};
function disappear7() {
  pic7.style.display = "none";
};
function disappear8() {
  pic8.style.display = "none";
};
function disappear9() {
  pic9.style.display = "none";
};

const clickMe = document.getElementById("btn-click-me");
    console.log(clickMe);
function changeBackground() {
		const red = Math.floor(Math.random() * 256);
		const green = Math.floor(Math.random() * 256);
		const blue = Math.floor(Math.random() * 256);
  
	  	let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
		  document.body.style.background = bgColor;

		}

    clickMe.addEventListener("click" , changeBackground, false);
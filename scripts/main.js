var myHeading = document.querySelector("h1");
var myImage = document.querySelector("img");
var myVid = document.getElementById("myVid");

myImage.onclick = function() {
		var mySrc = myImage.getAttribute("src");
		if(mySrc === "images/butt.jpg") {
				myImage.style.display = "none";
				myHeading.textContent = "v v v v v v v v v v v v v v v v v v v v v";
//				var x = document.querySelector('a').textContent = "Warned ya..... ";
				myVid.style.display = "block";
				myVid.play();
		}
}

var myButton = document.querySelector("button");


function setUserName() {
	var myName = prompt("What's your name?");
	localStorage.setItem("name",myName);
	myHeading.innerHTML = myHeading.textContent + ", " + myName;
}

if(!localStorage.getItem("name")) {
	setUserName();
} else {
	var storedName = localStorage.getItem("name");
	myHeading.innerHTML = myHeading.textContent + ", " + storedName;
}

myButton.onclick = function() {
	setUserName();
}

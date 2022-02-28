const answer1 = document.getElementById("answer1");
const arrowButton1 = document.getElementById("arrow1");
const question1 = document.getElementById("question1");

question1.addEventListener("click", function action() {
	arrowButton1.classList.toggle("rotate");
	question1.classList.toggle("bold");
	if (answer1.style.maxHeight) {
		answer1.style.maxHeight = null;
	} else answer1.style.maxHeight = answer1.style.maxHeight = "200" + "px";
});

const answer2 = document.getElementById("answer2");
const arrowButton2 = document.getElementById("arrow2");
const question2 = document.getElementById("question2");

question2.addEventListener("click", function action() {
	arrowButton2.classList.toggle("rotate");
	question2.classList.toggle("bold");
	if (answer2.style.maxHeight) {
		answer2.style.maxHeight = null;
	} else answer2.style.maxHeight = answer2.style.maxHeight = "200" + "px";
});
const answer3 = document.getElementById("answer3");
const arrowButton3 = document.getElementById("arrow3");
const question3 = document.getElementById("question3");

question3.addEventListener("click", function action() {
	arrowButton3.classList.toggle("rotate");
	question3.classList.toggle("bold");
	if (answer3.style.maxHeight) {
		answer3.style.maxHeight = null;
	} else answer3.style.maxHeight = answer3.style.maxHeight = "200" + "px";
});

const answer4 = document.getElementById("answer4");
const arrowButton4 = document.getElementById("arrow4");
const question4 = document.getElementById("question4");

question4.addEventListener("click", function action() {
	arrowButton4.classList.toggle("rotate");
	question4.classList.toggle("bold");
	if (answer4.style.maxHeight) {
		answer4.style.maxHeight = null;
	} else answer4.style.maxHeight = answer4.style.maxHeight = "200" + "px";
});

const answer5 = document.getElementById("answer5");
const arrowButton5 = document.getElementById("arrow5");
const question5 = document.getElementById("question5");

question5.addEventListener("click", function action() {
	arrowButton5.classList.toggle("rotate");
	question5.classList.toggle("bold");
	if (answer5.style.maxHeight) {
		answer5.style.maxHeight = null;
	} else answer5.style.maxHeight = answer5.style.maxHeight = "200" + "px";
});

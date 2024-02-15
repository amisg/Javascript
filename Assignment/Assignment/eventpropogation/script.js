function func1(event) {
	console.log("DIV 1 is clicked.");
}

function func2() {
	console.log("DIV 2 is clicked.");
}

const anchorElement = document.getElementById("myAnchor");
console.log(anchorElement);
anchorElement.addEventListener("click", (event) => {
	event.preventDefault();
	console.log("preventDebug", event);
});

const divElement = document.getElementById("div1");
console.log(divElement);
divElement.addEventListener("click", (event) => {
	const checkElement = document.getElementById("check");
	console.log(checkElement);
	if (checkElement.checked) {
		event.stopPropagation();
		console.log("event debug");
	}
});

const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", (e) => {
	e.preventDefault();
});

const firstDiv = document.querySelector(".first-div");
const secondDiv = document.querySelector(".second-div");
let output = document.querySelector(".output");

firstDiv.addEventListener("click", () => {
	output.innerText += "first div called";
});

secondDiv.addEventListener("click", (e) => {
	e.stopPropagation();
	output.innerText += "second div called -- ";
});

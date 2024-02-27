// selectors
const inputBoxElement = document.getElementById("max-sum-holder-input");

const rangeAElement = document.getElementById("range-a-holder-input");
const rangeBElement = document.getElementById("range-b-holder-input");

const rangeAValue = document.getElementById("range-a-value");
const rangeBValue = document.getElementById("range-b-value");

const sumElement = document.getElementById("sum");

//Event listeners

inputBoxElement.addEventListener("change", (event) => {
	const value = event.target.value;
	memory.max = value;
	console.log(value);
	console.log(memory);

	//	-------- update the range b label and actual range --------
	rangeBValue.innerHTML = value;
	rangeBElement.max = value;
	rangeBElement.value = value;
});

rangeBElement.addEventListener("change", (event) => {
	const value = event.target.value;
	const differanceRange = inputBoxElement.value - value;
	console.log(inputBoxElement.value);
	console.log(value, differanceRange, "value inside range b");

	// updating range b
	rangeBValue.innerHTML = value;

	//updating range a
	rangeAElement.max = differanceRange;
	// rangeAValue.innerHTML = differanceRange;
	updateMaxSum();
});

rangeAElement.addEventListener("change", (event) => {
	const value = event.target.value;
	rangeAValue.innerHTML = value;
	updateMaxSum();
});

function updateMaxSum() {
	sumElement.innerHTML =
		Number(rangeAElement.value) + Number(rangeBElement.value);
}
//logic
const memory = {
	max: 0,
};

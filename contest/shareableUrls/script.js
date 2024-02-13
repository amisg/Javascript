const buttonElement = document.getElementById("button");

buttonElement.addEventListener("click", (eventObj) => {
	const baseUrl = "https://localhost:8080/";

	const nameElement = document.getElementById("name");
	const gradYearElement = document.getElementById("year");

	const name = nameElement.value;
	const year = gradYearElement.value;

	console.log(name, year, "debug");

	let str = "?";

	if (name && year) {
		str += "name=" + name + "&" + "year=" + year;
	} else if (name) {
		str += "name=" + name;
	} else if (year) {
		str += "year=" + year;
	} else {
		str += "";
	}

	const headingElement = document.getElementById("url");
	headingElement.textContent = baseUrl + str;
});

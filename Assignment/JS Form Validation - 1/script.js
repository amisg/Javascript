function ageChange(e) {
	const age = e.target.value;
	// console.log(age);
	const errorHolderElement = document.getElementById("errors-holder");
	const submitElement = document.querySelector("button");
	if (age < 5) {
		errorHolderElement.textContent =
			"You need to be atleast 5 years old to participate";
		submitElement.disabled = true;
	} else {
		errorHolderElement.textContent = "";
		submitElement.disabled = false;
	}
}

function handleSubmit(e) {
	e.preventDefault();
	var age = document.getElementById("q_age").value;
	var ownPhone = document.getElementById("q_owns_phone").checked;
	var resultHolderElement = document.getElementById("result-holder");
	if (age === "0") {
		var errorHolderElement = document.getElementById("errors-holder");
		errorHolderElement.textContent = "Please choose age";
		return;
	}
	if (ownPhone) {
		if (age < 13) {
			resultHolderElement.textContent = "You are too young to have a phone";
		} else {
			resultHolderElement.textContent = "Use your phone in moderation";
		}
	} else {
		if (age < 13) {
			resultHolderElement.textContent = "You will get a phone soon";
		} else {
			resultHolderElement.textContent = "You should get a phone";
		}
	}
}

// const inputElement = document.getElementById("q_age");

// console.log(inputElement);

// inputElement.addEventListener("keyup", ageChange);

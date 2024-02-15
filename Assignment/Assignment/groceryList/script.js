let click = 0;

function calcTotal() {
	const tableElement = document.querySelector("tbody");

	if (click > 0) {
		let tElement = document.querySelector(
			"body > table > tbody > tr:last-child"
		);
		tElement.remove();
	}

	const pricesElement = document.querySelectorAll("[data-ns-test='price']");

	let totalPrice = 0;
	for (let index = 0; index < pricesElement.length; index++) {
		const element = pricesElement[index];
		const value = element.textContent;
		totalPrice += Number(value);
	}

	const lastRow = document.createElement("tr");

	const tdElementForGrandTotal = document.createElement("td");
	const tdElementForGrandTotalInt = document.createElement("td");

	tdElementForGrandTotal.textContent = "Grand Total";

	tdElementForGrandTotalInt.setAttribute("data-ns-test", "grandTotal");
	tdElementForGrandTotalInt.textContent = totalPrice;

	lastRow.append(tdElementForGrandTotal);
	lastRow.append(tdElementForGrandTotalInt);

	tableElement.append(lastRow);
	click++;
}

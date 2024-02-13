const tableElement = document.getElementsByTagName("table")[0];
console.dir(tableElement);

const pricesElemtnt = document.querySelectorAll("[data-ns-test='price']");

let totalPrice = 0;
for (let index = 0; index < pricesElemtnt.length; index++) {
	const tdElement = pricesElemtnt[index];
	console.dir(tdElement);
	const value = tdElement.textContent;
	totalPrice += Number(value);
}

console.log(totalPrice);

const newTablRow = document.createElement("tr"); // <tr> </tr>

const newTDelement = document.createElement("td"); // <td> </td>
newTDelement.setAttribute("data-ns-test", "grandTotal"); // <td data-ns-test="grandTotal"> </td>
newTDelement.textContent = totalPrice; // <td data-ns-test="grandTotal"> TOTAL </td>

newTablRow.append(newTDelement); // <td> <td data-ns-test="grandTotal"> TOTAL </td>  </td>

tableElement.append(newTablRow);

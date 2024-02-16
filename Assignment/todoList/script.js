const buttonElement = document.querySelector(".todo-button");

const inputElement = document.querySelector(".todo-input");

const todoList = document.querySelector(".todo-list");

buttonElement.addEventListener("click", addTodo);

function addTodo(event) {
	event.preventDefault();
	const liDivElement = document.createElement("div");

	const liElement = document.createElement("li");
	liElement.innerText = inputElement.value;
	liElement.classList.add("todo-item");
	liDivElement.appendChild(liElement);
	inputElement.value = "";

	const liCompleteBtn = document.createElement("button");
	liCompleteBtn.classList.add("complete-btn");
	liCompleteBtn.innerHTML = "Completed";
	liDivElement.appendChild(liCompleteBtn);

	const deleteBtn = document.createElement("button");
	deleteBtn.classList.add("trash-btn");
	deleteBtn.innerHTML = "Delete";
	liDivElement.appendChild(deleteBtn);

	todoList.appendChild(liDivElement);
}

todoList.addEventListener("click", (event) => {
	const item = event.target;

	if (item.classList.contains("complete-btn")) {
		item.parentElement.firstChild.classList.toggle("completed");
	}

	if (item.classList.contains("trash-btn")) {
		item.parentElement.remove();
	}
});

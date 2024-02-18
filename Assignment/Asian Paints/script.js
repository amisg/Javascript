const applyBtn = document.getElementById("apply-btn");
const resetBtn = document.getElementById("reset-btn");
const wallIdInput = document.getElementById("wall_id");
const wallColorInput = document.getElementById("wall_color");
const blocks = document.querySelectorAll(".block");
console.log(blocks);

applyBtn.addEventListener("click", () => {
	const wallId = parseInt(wallIdInput.value);
	const wallColor = wallColorInput.value;
	const selectedWall = document.getElementById(wallId.toString());
	if (selectedWall) {
		selectedWall.style.backgroundColor = wallColor;
	}
});

resetBtn.addEventListener("click", () => {
	blocks.forEach((block) => {
		block.style.backgroundColor = "transparent";
	});
});

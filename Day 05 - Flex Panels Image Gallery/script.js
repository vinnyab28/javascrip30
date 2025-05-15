const panelItems = document.querySelectorAll(".panel-item");

function toggleOpen() {
	this.classList.toggle("open");
}

function toggleActive(e) {
	if (!e.propertyName.includes("flex")) {
		return;
	}
	this.classList.toggle("active");
}

panelItems.forEach((panelItem) => {
	panelItem.addEventListener("click", toggleOpen);
	panelItem.addEventListener("transitionend", toggleActive);
});

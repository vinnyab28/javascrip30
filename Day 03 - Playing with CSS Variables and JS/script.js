const inputs = document.querySelectorAll("input");

function handleChange() {
	const suffix = this.dataset.sizing || "";
	const styleVariable = this.name;

	document.documentElement.style.setProperty(`--${styleVariable}`, this.value + suffix);
}

inputs.forEach((input) => {
	input.addEventListener("change", handleChange);
	input.addEventListener("mousemove", handleChange);
});

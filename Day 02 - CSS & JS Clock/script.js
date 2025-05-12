document.addEventListener("DOMContentLoaded", function () {
	const secondHand = document.querySelector(".second-hand");
	const minuteHand = document.querySelector(".minute-hand");
	const hourHand = document.querySelector(".hour-hand");

	function changeDate() {
		const date = new Date();

		const seconds = date.getSeconds();
		const secondsDeg = (seconds / 60) * 360 - 90;
		if (seconds === 0) {
			secondHand.style.transition = "none";
			secondHand.style.transform = `translate(150px, -50%) rotate(${secondsDeg}deg)`;
		} else {
			secondHand.style.transition = "all 0.5s";
			secondHand.style.transform = `translate(150px, -50%) rotate(${secondsDeg}deg)`;
		}

		const minutes = date.getMinutes();
		const minutesDeg = (minutes / 60) * 360 - 90;
		minuteHand.style.transform = `translate(150px, -50%) rotate(${minutesDeg}deg)`;

		const hours = date.getHours();
		const hoursDeg = (hours / 12) * 360 - 90;
		hourHand.style.transform = `translate(150px, -50%) rotate(${hoursDeg}deg)`;

		const timeDisplay = document.getElementById("time");
		timeDisplay.textContent = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
	}

	setInterval(changeDate, 1000);
});

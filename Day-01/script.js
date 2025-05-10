document.addEventListener("DOMContentLoaded", function () {
	function playAudio(e) {
		const audio = document.querySelector(`audio[data-key="${e.code}"]`);
		const key = document.querySelector(`.key[data-key="${e.code}"]`);
		if (!audio) return;
		audio.currentTime = 0;
		audio.play();
		key.classList.add("playing");
	}

	function removeClass(e) {
		if (e.propertyName !== "transform") return;
		this.classList.remove("playing");
	}

	window.addEventListener("keydown", playAudio);

	const keyList = document.querySelectorAll(".key");
	keyList.forEach((key) => key.addEventListener("transitionend", removeClass));
});

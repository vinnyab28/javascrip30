const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const toggleBtn = document.querySelector(".toggle");
const skipButtons = document.querySelectorAll("[data-skip]");
const sliders = document.querySelectorAll(".player__slider");
const fullscreenBtn = document.querySelector(".fullscreen");
const fullscreenIcon = document.querySelector(".fullscreen-icon");
const fullscreenExitIcon = document.querySelector(".fullscreen-exit-icon");

function togglePlay() {
	video.paused ? video.play() : video.pause();
}

function updateIcon() {
	const icon = this.paused ? "►" : "❚ ❚";
	toggleBtn.textContent = icon;
}

function skipVideo() {
	video.currentTime += parseFloat(this.dataset.skip);
}

function handleSliders(e) {
	video[e.target.name] = e.target.value;
}

function seekVideo(e) {
	const seekTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = seekTime;
}

function changeProgress() {
	const percentage = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percentage}%`;
}

function toggleFullscreen() {
	if (video.requestFullScreen) {
		video.requestFullScreen();
	} else if (video.webkitRequestFullScreen) {
		video.webkitRequestFullScreen();
	} else if (video.mozRequestFullScreen) {
		video.mozRequestFullScreen();
	}
}

function onFullScreenChange() {
	player.style.width = video.clientWidth + "px";
	player.style.height = video.clientHeight + "px";
}

video.addEventListener("click", togglePlay);

toggleBtn.addEventListener("click", togglePlay);

video.addEventListener("play", updateIcon);
video.addEventListener("pause", updateIcon);
video.addEventListener("timeupdate", changeProgress);

skipButtons.forEach((btn) => {
	btn.addEventListener("click", skipVideo);
});

let sliderActive = false;

sliders.forEach((slider) => {
	slider.addEventListener("change", handleSliders);
	slider.addEventListener("mousemove", (e) => sliderActive && handleSliders(e));
	slider.addEventListener("mousedown", () => (sliderActive = true));
	slider.addEventListener("mouseup", () => (sliderActive = false));
});

let progressActive = false;

progress.addEventListener("click", seekVideo);
progress.addEventListener("mousedown", () => (progressActive = true));
progress.addEventListener("mouseup", () => (progressActive = false));
progress.addEventListener("mousemove", (e) => progressActive && seekVideo(e));

fullscreenBtn.addEventListener("click", toggleFullscreen);
video.addEventListener("fullscreenchange", onFullScreenChange);

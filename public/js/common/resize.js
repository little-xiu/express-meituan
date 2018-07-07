function resizeFontsize() {
	var w = document.documentElement.clientWidth;
	document.documentElement.style.fontSize = w / 750 * 100 + "px";
}
resizeFontsize();
window.addEventListener("orientationchange",resizeFontsize);
window.addEventListener("resize",resizeFontsize);
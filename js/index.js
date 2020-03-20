function showText (el) {
	if(el.previousElementSibling.clientHeight === 400) {
        el.previousElementSibling.style.height = "100%";
        el.innerHTML = "Show Less...";
		} else {
            el.previousElementSibling.style.height = "400px";
            el.innerHTML = "READ MORE";
		}
}
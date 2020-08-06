let input = document.querySelector('.switch-input');

// Dark Mode Switch
input.addEventListener("click", function() {
	if (input.checked) {
		document.body.classList.add("dark-theme");
	} else {
	document.body.classList.remove("dark-theme");
	}
});
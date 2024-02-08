/*Barre de navigation*/
const links = document.querySelectorAll("nav li");

icons.addEventListener("click", () => {
	nav.classList.toggle("active");
});

links.forEach((link) => {
	link.addEventListener("click", () => {
		nav.classList.remove("active");
	});
});

/*Counter menu*/
$(document).ready(function(){
	$('.num').counterUp({
		time: 1200
	});
});

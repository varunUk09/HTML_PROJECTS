const menu = document.getElementById('menu');
const close = document.getElementById('close');
const nav = document.getElementById("nav-bar");

function toggleNav(e){
	nav.classList.toggle("show-nav");
}

menu.addEventListener('click',toggleNav);
close.addEventListener('click',toggleNav);
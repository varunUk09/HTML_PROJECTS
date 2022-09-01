const menu = document.getElementById('menu');
const nav = document.getElementById("nav");
const close = document.getElementById('close');
const navbg = document.getElementById('navbg');

function toggle(e){
	nav.classList.toggle("show-nav");
	navbg.classList.toggle("show-nav-bg");
}

function removeStyle(e){
	nav.classList.remove("show-nav");
	navbg.classList.remove("show-nav-bg");
}


menu.addEventListener('click',toggle);
close.addEventListener('click',toggle);
navbg.addEventListener('click',toggle);
window.addEventListener('scroll',removeStyle);

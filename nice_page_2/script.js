const menu = document.getElementById('menu');
const nav = document.getElementById("nav-bar");
const close = document.getElementById('close');
const bckgrnd = document.getElementById('background');

function toogle(e){
	nav.classList.toggle("show-nav");
    bckgrnd.classList.toggle("show-background");
}

function removeCls(e){
	nav.classList.remove("show-nav");
    bckgrnd.classList.remove("show-background");
}

menu.addEventListener('click',toogle);

close.addEventListener('click',toogle);

bckgrnd.addEventListener('click', removeCls);

window.addEventListener("scroll", removeCls);

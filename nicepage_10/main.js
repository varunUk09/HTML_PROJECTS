const menuBtn = document.querySelector("#menu_btn");
const headerNav = document.querySelector("#header_nav");
const closeBtn = document.querySelector("#close_btn")

function toggleNav(){
	headerNav.classList.toggle("show_nav");
	document.querySelector(".nav_support").classList.toggle("show_nav_support");
}


function hideNav(){
	headerNav.classList.remove("show_nav");
	document.querySelector(".nav_support").classList.remove("show_nav_support");
}

menuBtn.addEventListener("click",toggleNav);
closeBtn.addEventListener("click",toggleNav);
document.querySelector(".nav_support").addEventListener("click",hideNav);
window.addEventListener("scroll",hideNav);

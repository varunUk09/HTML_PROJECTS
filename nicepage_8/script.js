const menu = document.querySelector("#menu");
const closeMenu = document.querySelector("#close");
const navSlide = document.querySelector("#nav_bar");
const navSupport = document.querySelector(".nav-support");


function toggleNav(){
	navSlide.classList.toggle("show-nav-slide");
	navSupport.classList.toggle("show-nav-support");
}

menu.addEventListener("click",toggleNav);
closeMenu.addEventListener("click",toggleNav);

const menuBtn = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".fa-times");
const nav = document.querySelector("#nav-bar")

function toggleNav(){
	nav.classList.toggle("show-nav");
	document.querySelector(".nav-bg").classList.toggle("nav-bg-show");
}

menuBtn.addEventListener("click",toggleNav);
closeBtn.addEventListener("click",toggleNav);

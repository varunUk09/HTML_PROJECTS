const menuBtn = document.querySelector(".menu_btn");
const closeBtn = document.querySelector(".close-nav");

const nav = document.querySelector(".cta-btns");

function showNav(){
	nav.classList.add("show-nav");
}
function hideNav(){
	nav.classList.remove("show-nav");
}

menuBtn.addEventListener("click",showNav);
closeBtn.addEventListener("click",hideNav);


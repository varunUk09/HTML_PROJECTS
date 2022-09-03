const menuBtn = document.getElementById('menu_btn');
const nav = document.getElementById('navigation');
menuBtn.addEventListener('click',function(){
	nav.classList.toggle("show-nav");
	console.log("btn clicked")
});
const menu = document.getElementById("menu");
const navbar = document.getElementById("navbar");


menu.addEventListener('click',function(){
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('nav-toggle')

});

window.addEventListener('scroll',function(){
    navbar.classList.remove('nav-toggle')
    menu.classList.remove('fa-times')
});


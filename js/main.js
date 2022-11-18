let burger = document.querySelector('.burger-menu');
let menu = document.querySelector('.menu');

burger.addEventListener('click' , function() {
    console.log("clicked");
    menu.classList.toggle('menu_active');    
    burger.classList.toggle('burger_active');
});
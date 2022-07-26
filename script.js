const burger_menu = document.querySelector(".burger-menu");
const burger_menu_button = document.querySelector(".burger-menu_button");
const burger_line = document.querySelector(".burger-menu_lines");

function tooggleMenu(){
    burger_menu.classList.toggle("active");
    burger_line.classList.toggle('active');
    console.log('test')
}
window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width:767px)").matches) {
        burger_menu.classList.remove("active");
        burger_line.classList.remove('active');
    } 
  });
//const body = document.querySelector("body");
burger_menu_button.addEventListener("click", tooggleMenu);
/*
const menu_btn = document.querySelectorAll(".header__link");
const hidden = document.querySelector(".hidden");
menu_btn.forEach((el) => {
    el.addEventListener("click", () => {
        header__menu.classList.remove("active");
        header__burger.classList.remove("active");
        body.classList.remove("hidden");

    });
});*/
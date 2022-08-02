const burger_menu = document.querySelector(".burger-menu");
const burger_menu_button = document.querySelector(".burger-menu_button");
const burger_line = document.querySelector(".burger-menu_lines");

function tooggleMenu() {
  burger_menu.classList.toggle("active");
  burger_line.classList.toggle("active");
}
window.addEventListener("resize", function () {
  if (window.matchMedia("(min-width:767px)").matches) {
    burger_menu.classList.remove("active");
    burger_line.classList.remove("active");
  }
  if (window.matchMedia("(max-width:390px)").matches) {
    sliderFor390px();
    console.log("test")
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
  const sliderLine = document.querySelector(".slider-line");
  const indicators = document.querySelectorAll(".indicators");
  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");
  const arrowBut = document.querySelectorAll(".arrow");

const sliderFor390px = function () {
  //Slider - 390
  let offset = 0;
  let widthSlide = 360;
  
  const activeIndicators = function (index) {
    for (ind of indicators) {
      ind.classList.remove("indicators_selected");
    }
    indicators[index].classList.add("indicators_selected");
    console.log(index);
  };

  arrowRight.addEventListener("click", function (event) {
    event.stopPropagation();
    offset += widthSlide;
    if (offset >= widthSlide * 3) {
      offset = 0;
    }
    moveToSlide(offset);
    activeIndicators(offset / widthSlide);
    disabledArrow(offset);
    console.log(offset);
  });
  const moveToSlide = function (num) {
    sliderLine.style.left = -num + "px";
  };

  const disabledArrow = function (num) {
    for (button of arrowBut) {
      button.classList.remove("disabled");
    }
    if (num === 0) {
      arrowLeft.classList.add("disabled");
    }
    if (Math.abs(num) === widthSlide * 2) {
      arrowRight.classList.add("disabled");
    }
  };

  arrowLeft.addEventListener("click", function (event) {
    event.stopPropagation();
    offset -= widthSlide;
    if (offset < 0) {
      offset = widthSlide * 2;
    }
    moveToSlide(offset);
    activeIndicators(Math.abs(offset / widthSlide));
    disabledArrow(offset);
    console.log(offset);
  });

  indicators.forEach((item, indexInd) => {
    item.addEventListener("click", () => {
      offset = indexInd * widthSlide;
      activeIndicators(indexInd);
      moveToSlide(offset);
      disabledArrow(offset);
    });
  });
 
};

'use strict';

// element toggle function
const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



// navbar variables
const navbar = document.querySelector("[data-navbar]");
const navbarOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarCloseBtn = document.querySelector("[data-nav-close-btn]");

navbarOpenBtn.addEventListener("click", function () {
  elemToggleFunc(navbar);
});

navbarCloseBtn.addEventListener("click", function () {
  elemToggleFunc(navbar);
});



// go top variable
const goTopBtn = document.querySelector("[data-go-top]");

// window scroll event for go top button
window.addEventListener("scroll", function () {

  if (this.window.scrollY >= 500) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }

});





// const dynamicText = document.getElementById("dynamic-text");
// const words = ["power of gospel music", "joy of worship", "healing of the soul"];
// let wordIndex = 0;
// let letterIndex = 0;
// let direction = 1;

// function typeWriter() {
//   dynamicText.textContent = words[wordIndex].slice(0, letterIndex);
//   letterIndex += direction;

//   if (letterIndex === words[wordIndex].length + 1) {
//     direction = -1;
//     setTimeout(() => {
//       wordIndex++;
//       direction = 1;
//       letterIndex = 0;
//     }, 2000);
//   }

//   if (wordIndex === words.length) {
//     wordIndex = 0;
//   }

//   setTimeout(typeWriter, 150);
// }

// typeWriter();





// music player





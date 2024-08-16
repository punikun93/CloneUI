window.addEventListener("scroll", function () {
  let nav = document.querySelector("nav");
  nav.classList.toggle("niv", window.scrollY >= 2);
  let h2Nav = nav.querySelector("h2");
  h2Nav.classList.toggle("hu2", window.scrollY >= 2);
  let ul = document.querySelector("ul");
  ul.classList.toggle("show", window.scrollY >= 2);
  let btn = nav.querySelector("button");
  btn.classList.toggle("show", window.scrollY >= 2);
  let play = nav.querySelector(".play");
  play.classList.toggle("hide", window.scrollY >= 2);
  let menu = document.getElementById("menu");
  menu.classList.toggle("menu", window.scrollY >= 2);
});

let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("toggle");
  let iframe = document.querySelector("iframe");
  iframe.classList.toggle("iframe");
  
});

const ex = document.getElementById("ex");
const buat = document.getElementById("buat");
const pop = document.querySelector(".pop-up");
buat.addEventListener("click", function () {
  pop.classList.add("pop");
});
ex.addEventListener("click", function () {
  pop.classList.remove("pop");
});

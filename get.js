// // get Html
// const clikHtml = document.querySelector(".html");
// clikHtml.addEventListener("click", function () {
//   let html = document.querySelector(".muncul-2");
//   html.style.display = "block";
//   let css = document.querySelector(".muncul-1");
//   css.style.display = "none";
//   let clik = document.querySelector(".css");
//   clik.style.backgroundColor = "#333";
//   let clik2 = document.querySelector(".html");
//   clik2.style.backgroundColor = "#222";
// });
// // get Css
// const clikCss = document.querySelector(".css");
// clikCss.addEventListener("click", function () {
//   let css = document.querySelector(".muncul-1");
//   css.style.display = "block";
//   let html = document.querySelector(".muncul-2");
//   html.style.display = "none";

//   let clik = document.querySelector(".css");
//   clik.style.backgroundColor = "#222";
//   let clik2 = document.querySelector(".html");
//   clik2.style.backgroundColor = "#333";
// });

const elements = {
  html: document.querySelector(".html"),
  css: document.querySelector(".css"),
  muncul1: document.querySelector(".muncul-1"),
  muncul2: document.querySelector(".muncul-2"),
};

function handleTabClick(event) {
  if (event.target === elements.html) {
    elements.muncul2.style.display = "block";
    elements.muncul1.style.display = "none";
    elements.html.style.backgroundColor = "#222";
    elements.css.style.backgroundColor = "#333";
  } else if (event.target === elements.css) {
    elements.muncul1.style.display = "block";
    elements.muncul2.style.display = "none";
    elements.css.style.backgroundColor = "#222";
    elements.html.style.backgroundColor = "#333";
  }
}

elements.html.addEventListener("click", handleTabClick);
elements.css.addEventListener("click", handleTabClick);

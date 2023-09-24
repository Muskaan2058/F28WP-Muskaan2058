// script.js
const header = document.getElementById("main-header");
const headerPlaceholder = document.getElementById("header-placeholder");

window.addEventListener("scroll", function() {
  if (window.scrollY > headerPlaceholder.clientHeight) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
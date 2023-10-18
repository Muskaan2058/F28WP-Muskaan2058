// script.js

/*** js for sticky header ***/
const header = document.getElementById("main-header");
const headerPlaceholder = document.getElementById("header-placeholder");

window.addEventListener("scroll", function () {
  if (window.scrollY > headerPlaceholder.clientHeight) {
    header.classList.add("sticky");
    headerPlaceholder.style.display = "block"; // Show the placeholder
  } else {
    header.classList.remove("sticky");
    headerPlaceholder.style.display = "none"; // Hide the placeholder
  }
});
import './style.css'

var burgerButton = document.getElementById("bb");
var burger = document.getElementById("burger");
burgerButton.addEventListener("click", function () {
  burger.classList.toggle("-translate-y-72");
  burger.classList.toggle("translate-y-10");
  burger.classList.toggle("fixed");
});
var list_a = document.getElementById("list-a");
var list_b = document.getElementById("list-b");
var list_c = document.getElementById("list-c");
var list_d = document.getElementById("list-d");
var list_e = document.getElementById("list-e");
list_a.addEventListener("click", function () {
  burger.classList.toggle("-translate-y-72");
  burger.classList.toggle("translate-y-10");
  burger.classList.toggle("fixed");
});
list_b.addEventListener("click", function () {
  burger.classList.toggle("-translate-y-72");
  burger.classList.toggle("translate-y-10");
  burger.classList.toggle("fixed");
});
list_c.addEventListener("click", function () {
  burger.classList.toggle("-translate-y-72");
  burger.classList.toggle("translate-y-10");
  burger.classList.toggle("fixed");
});
list_d.addEventListener("click", function () {
  burger.classList.toggle("-translate-y-72");
  burger.classList.toggle("translate-y-10");
  burger.classList.toggle("fixed");
});
list_e.addEventListener("click", function () {
  burger.classList.toggle("-translate-y-72");
  burger.classList.toggle("translate-y-10");
  burger.classList.toggle("fixed");
});
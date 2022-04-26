import './style.css'

var bb = document.getElementById('bb');
var burger = document.getElementById('burger');

bb.onclick = function(){
  burger.classList.toggle('translate-y-[300px]');
}

document.onclick = function (e) {
  if (e.target.id !== "nav" && e.target.id !== "bb" && e.target.id !== "word" && e.target.id !== "logo" && e.target.id !== "fhic" && e.target.id !== "burger" && e.target.id !== "li-a" && e.target.id !== "li-b" && e.target.id !== "li-c" && e.target.id !== "li-d" && e.target.id !== "li-e") {
    burger.classList.remove("translate-y-[300px]");
  }
};
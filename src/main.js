import './style.css'

var bb = document.getElementById('bb');
var burger = document.getElementById('burger');
var header = document.getElementsByTagName('header')

bb.onclick = function(){
  burger.classList.toggle('translate-y-[250px]');
}

document.onclick = function (e) {
  if (e.target.id !== "nav" && e.target.id !== "bb" && e.target.id !== "word" && e.target.id !== "logo" && e.target.id !== "fhic" && e.target.id !== "burger") {
    burger.classList.remove("translate-y-[250px]");
  }
};
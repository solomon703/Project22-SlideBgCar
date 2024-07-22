var ImgBox = document.querySelector(".img-box");
var ImgWrap = document.querySelector(".img-wraper");
var original = document.getElementById("original-img");
var arrow = document.getElementsByClassName("arrow");
var line = document.getElementById("line");

var leftSpace = ImgBox.offsetLeft;
original.style.width = ImgBox.offsetWidth + "px";

ImgBox.onmousemove  = function(e){
  var boxWidth = (e.pageX - leftSpace) + "px";
  ImgWrap.style.width = boxWidth;
  line.style.left = boxWidth;
}

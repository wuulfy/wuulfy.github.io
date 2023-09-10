function parallax() { // Parallax scrolling
  var scrolltotop = document.scrollingElement.scrollTop;
  var target = document.getElementById("topVid");
  var fac = 0.7;
  var yvalue = scrolltotop * fac;
  target.style.top = yvalue + "px";

  var scrolltotop = document.scrollingElement.scrollTop;
  var target = document.getElementById("lottieContainer");
  var fac = 0.35;
  var yvalue = scrolltotop * fac;
  target.style.top = "+" + yvalue + "px";

  var scrolltotop = document.scrollingElement.scrollTop;
  var target = document.getElementById("fuckOff");
  var fac = 0.5;
  var yvalue = scrolltotop * fac;
  target.style.transform = "translate(0, " + "-" + yvalue + "px" + ")";
}
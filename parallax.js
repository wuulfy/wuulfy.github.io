window.onscroll = function() {parallax()};

function parallax() { // Parallax scrolling
    var scrolltotop = document.scrollingElement.scrollTop + 1;
    var target = document.getElementById("topVideo");
    var fac = 0.001;
    var yvalue = scrolltotop * fac;
    target.style.opacity = 1.3 - yvalue;
    target.style.transform = "scale(" + (1 - (yvalue / 5)) + "," + (1 - (yvalue / 5)) + ")";
    target.style.borderRadius = yvalue * 100 + "px"
    document.getElementById("topOfPage").style.opacity = 1 - yvalue * 1.3;
    var scaleIndex = 1 - yvalue / 4;
    document.getElementById("topOfPage").style.transform = "scale(" + scaleIndex + ")";
var multiplier = 1.9;
    document.getElementById("a6").style.transform = "translate(0, " + yvalue * -140 * multiplier + "px)";
    document.getElementById("a5").style.transform = "translate(0, " + yvalue * -100 * multiplier + "px)";
    document.getElementById("a4").style.transform = "translate(0, " + yvalue * -80 * multiplier + "px)";
    document.getElementById("a3").style.transform = "translate(0, " + yvalue * -60 * multiplier + "px)";
    document.getElementById("a2").style.transform = "translate(0, " + yvalue * -40 * multiplier + "px)";
    document.getElementById("a1").style.transform = "translate(0, " + yvalue * -20 * multiplier + "px)";
    document.getElementById("a7").style.transform = "translate(0, " + yvalue * -60 * multiplier + "px)";
  }
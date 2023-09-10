console.log("💗 I'm not sure what you're doing in the console but I hope you're having a nice day! ^_^")

window.onscroll = function() {barDarken(); parallax()};

function barDarken() {
    if (document.body.scrollTop > 570 || document.documentElement.scrollTop > 570) {
       document.getElementById("navContainer").style.width = "100%";
        document.getElementById("navBar").style.width = "calc(100% - 73px)";
        document.getElementById("navBar").style.margin = "10px 10px 0 0";
        document.getElementById("navBar").style.padding = "0px 30px 0px 27px";
        document.getElementById("navBar").style.borderRadius = "10px 10px 50x 50px";
        document.getElementById("leftArea").style.margin = "10px 0px 0 25px";     
      } else {
        document.getElementById("navContainer").style.width = "1650px";
        document.getElementById("navBar").style.width = "320px"; // WIDTH ELEMENT --- Hardcoded width is necessary for the animation to work
        document.getElementById("navBar").style.margin = "40px 40px 0 0";
        document.getElementById("navBar").style.padding = "0 6px 0 6px";
        document.getElementById("navBar").style.borderRadius = "200px";
        document.getElementById("leftArea").style.margin = "40px 0px 0 50px";
      } 
    }

// Dear Lottie, for a standard in SVG animation, WHY THE FUCK WOULD YOU USE TRANSFORM ON THE SVG ELEMENT!? IT CAUSES BLURRING AND IS A PAIN IN EVERYONE'S ASS!
// Anyways, this fixes that stupidity with an override. I hate that I need to this...
document.addEventListener("DOMContentLoaded", function(){
  let elements = document.getElementsByTagName('lottie-player');
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('play', (event) => {
      event.target.shadowRoot.querySelector('svg').style.transform = '';
    });
    elements[i].play();
  }
});
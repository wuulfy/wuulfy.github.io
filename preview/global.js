console.log("💗 I'm not sure what you're doing in the console but I hope you're having a nice day!")

window.onscroll = function() {barDarken()};

function barDarken() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("navBar").style.margin = "7px 50px 0 0";
        document.getElementById("navBlock").style.height = "80px";
        document.getElementById("leftArea").style.margin = "15px 0px 0 25px";
      } else {
        document.getElementById("navBar").style.margin = "30px 50px 0 0";
        document.getElementById("navBlock").style.height = "0px";
        document.getElementById("leftArea").style.margin = "36px 0px 0 25px";
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

function mobileOpen() {
  document.getElementById("mobileButtonContainer").style.display = "none";
  document.getElementById("mobileUI").style.display = "block";
  document.getElementById("closeRegion").style.display = "block";
}

function mobileClose() {
  document.getElementById("mobileButtonContainer").style.display = "block";
  document.getElementById("mobileUI").style.display = "none";
  document.getElementById("closeRegion").style.display = "none";
}
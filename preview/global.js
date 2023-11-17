console.log("💗 I'm not sure what you're doing in the console but I hope you're having a nice day!")

window.onscroll = function() {barDarken()};

function barDarken() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        // After
        document.getElementById("navBar").style.backgroundColor = "red";
      } 
    else {
       // Top of page
        document.getElementById("navBar").style.backgroundColor = "#00000000";
      } 
    }

// Dear Lottie, for a standard in SVG animation, WHY THE F*%# WOULD YOU USE TRANSFORM ON THE SVG ELEMENT!? IT CAUSES BLURRING AND IS A PAIN IN EVERYONE'S @#*!
// Anyways, this fixes that stupidity with an override. I hate that I need to do this...
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

function playReel() {
  document.getElementById("reelOverlay").style.display = "block";
  document.getElementById("showreelPlayer").style.display = "block";
}

function closeReel() {
  document.getElementById("reelOverlay").style.display = "none";
  document.getElementById("showreelPlayer").style.display = "none";
}
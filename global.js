console.log("💗 I'm not sure what you're doing in the console but I hope you're having a nice day! ^_^")

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

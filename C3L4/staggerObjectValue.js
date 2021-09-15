"use strict";

function imageAssembly() {
  document.body.innerHTML += 
  '<div class="image"> <img src="background.jpg"></div> ';

  for (let i = 1; i < 65; i++) {
    document.body.innerHTML += 
      '<div class="block"><img src="images/' + i + '.png"></div>';
    };

  document.body.innerHTML += 
    '<div class="image"><img src="background.png"></div>' +
    ' <div class="mask"><img src="background_white.png"></div>';
}
imageAssembly();

let click = 1, angle = 0;
let tl = gsap.timeline();

document.addEventListener("click", function(e) {
  angle += 360;
  if (click == 1) {
    click = 2;
    tl.to(".block", 3, {
      rotateZ: angle, x: 1200, ease: "back.inOut(6)",
      stagger: { amount: 2.5, grid: "auto", from: "end"}
    })
  } else {
    click = 1;
    tl.to(".block", 3, {
      x: 0, ease: "back.inOut(7)",
      stagger: { amount: 1.5, grid: "auto", from: "centre" }
    })
  }
})



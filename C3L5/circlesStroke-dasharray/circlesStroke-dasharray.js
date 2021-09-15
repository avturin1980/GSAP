﻿"use strict";
function NewCircle(id, positionX, positionY, radius) {
    this.id = id;
    this.positionX = positionX;
    this.positionY = positionY;
    this.radius = radius;
    this.draw = function() {
      svgContainer.innerHTML += 
      `<circle id="${this.id}" cx="${this.positionX}" 
      cy="${this.positionY}" r="${this.radius}" 
      stroke="white" stroke-width="10" stroke-dasharray="100%, 0"/>`;
    }
}

function figureAssembly() {
  let r = 300;
  let x = 650;
  let y = 400;
  for (let j = 0; j < 20; j++) { 
    let circle = new NewCircle("cr", x, y, r);
    circle.draw();
    r = r - 15;
  }
}
figureAssembly();

gsap.to("#cr", {
  duration: 4, 
  delay: 1,
  repeatDelay: 1, 
  strokeDasharray: "0, " + "100%", 
  yoyo: true, 
  ease: "power1.inOut", 
  repeat: -1, 
  stagger: function(index, target, list) {
    let gap = 0.2;
    if (index % 2 == 0) {gap = 0.05}
    else {gap = 0.2}
    return gap*index;
  }
});   




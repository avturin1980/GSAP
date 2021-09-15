"use strict";

let NumberOfBees = 250;
const w = window.innerWidth;
const h = window.innerHeight;
const _2Pi = Math.PI * 2;

function random(min, max) {
  if (max == null) { max = min; min = 0; }
  return Math.random() * (max - min) + min;
};

function NewBee(id, x, y, size) {
  this.id = id;
  this.x = x;
  this.y = y;
  this.size = size;

  this.draw = function() {
    svgContainer.innerHTML += 
    `<image id="${this.id}" xlink:href="bee.png" 
    x="${this.x}" y="${this.y}" width="${this.size}%"/>`;
   }
};

function collectingBees() {  
    for (let i = 0; i < NumberOfBees ; i++) {
      new NewBee("bee" + i, random(w * 0.3, w * 0.5), 
        random(h * 0.25, h * 0.6), 1).draw();
    }
};

collectingBees();

function beeMovement(n) {
  let radius = random(1) < 0.35 ? random(20, 400) : random(20, 50);

  gsap.set("#bee"+n, {x: random(-_2Pi, _2Pi), y: random(-_2Pi, _2Pi)}); 
  
  gsap.to("#bee"+n,  {
    duration: random(1.5, 3),
    x: "+=" + _2Pi, 
    y: "+=" + _2Pi, 
    modifiers: {
      x: x => Math.cos(parseFloat(x)) * radius + "px",
      y: y => Math.cos(parseFloat(y)) * radius + "px"
    },
    repeat: -1, ease: "none"
  });  

  gsap.to("#bee"+n,  {
    duration: random(1.5, 3),
    width :  random(0.1, 2) + "%",
    yoyo:true,
    repeat: -1,
    ease: "none"
  });  
};

function animationOfBees() { 
    for (let j = 0; j < NumberOfBees ; j++) {
        beeMovement(j);
    }
};

animationOfBees();
























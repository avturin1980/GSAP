"use strict";

function randomNumber (m,n)
{
  m = parseInt(m);
  n = parseInt(n);
  return Math.floor( Math.random() * (n - m + 1) ) + m;
}

function NewCloud(id, positionX, positionY, width, height, colour) {
    this.id = id;
    this.positionX = positionX;
    this.positionY = positionY;
    this.width = width;
    this.height = height;
    this.colour = colour;

    this.draw = function() {
      JScontentCreation.innerHTML += 
      `<rect id="${this.id}" x="${this.positionX}" y="${this.positionY}" 
      width="${this.width}" height="${this.height}" fill="${this.colour}"/>`;
     }
  }

function rectAssembly1(){
  let k = 1;
  let x = 350;
  let y = 100;
  let width = 600;
  let height = 400;
  let colour = "white";

 for (let j = 1; j < 40; j++) { 
     let c1 = new NewCloud("r", x, y, width, height, colour);
     c1.draw();
     x += 10;
     y += 7;
     width -=  20;
     height -= 14;

     if ((j%2)==0){colour = "white"}
     else {colour = "black"}
 }
}


rectAssembly1();

let str = r;
gsap.to(str, {duration: 2, rotate: 360, repeat: 10, yoyo:true, ease: "power1.in", stagger: 0.05});  


// for (let j = 1; j < 20; j++) { 
//     let str = "#Cl"+j;
//     gsap.to(str, {duration: 7, x: 100, y: 0, scale: 2, repeat: 40, ease: "linear"});       
// }

window.addEventListener('mousemove', function(e) {
  gsap.to(str, {duration: 0.1, x: e.pageX-600, y: e.pageY-300, ease: "power1.out", stagger: 0.05});   
}, false);



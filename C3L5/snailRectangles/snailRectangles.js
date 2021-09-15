"use strict"
let originalMatrix = [], snail = [];

function Rectangle(x_1, y_1, width, height, fill) {
  this.x_1 = x_1;
  this.y_1 = y_1;
  this.width = width;
  this.height = height;
  this.fill = fill;
  
  this.draw = function() {                       
    svgContainer.innerHTML += 
     `<rect class="rct" x="${this.x_1}" y="${this.y_1}" 
     width="${this.width}" height="${this.height}" 
     fill="${this.fill}"/>`;  
  }
}

function assemblingRectangles() { 
  let y1 = 60;
  let width1 = 15, height1 = 15;
  let quantRow = 19, quantColumn = 27;
  let stepX = 30, stepY = 30;
  let i = -1;
  for (let j = 0; j < quantRow; j++) {
    let x1 = 45;
    originalMatrix[j] = [];
    for (let k = 0; k < quantColumn; k++) { 
      i++;
      originalMatrix[j].push(i);
      new Rectangle(x1, y1, width1, height1, "indigo").draw();
      x1 +=stepX;
    }
    y1 += stepY;
  }
}
assemblingRectangles();

function buildSnail(arr) {
    let src = arr.map(a => a.slice());
    let pushAll = e => snail.push(e);
    let fase = 0;
    while (src.filter(a => a.length > 0).length > 0) {
        switch (fase++ % 4) {
            case 0:
                src.splice(0, 1)[0].forEach(pushAll);
                break;
            case 1:
                src.map(a => a.splice(-1)[0]).forEach(pushAll);
                break;
            case 2:
                src.splice(-1)[0].reverse().forEach(pushAll);
                break;
            case 3:
                src.map(a => a.splice(0, 1)[0]).reverse().forEach(pushAll);
                break;
        }
    }
    return snail;
}
buildSnail(originalMatrix);

gsap.to(".rct", {
  duration: 0.8,
  repeatDelay:1,
  scale: 0,
  repeat: -1,
  yoyo:true,
  ease: "back.in(9)",
  stagger: function(index, target, list) {
    return snail.indexOf(index)*0.01
  }
})




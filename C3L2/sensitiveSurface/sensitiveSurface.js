"use strict"
const quantnodes = 55; //reduce the number of nodes to speed up work
const surfWidth = 700;
const surfHeight = 500;
const nodesDistance = surfHeight/Math.sqrt(quantnodes/(surfWidth/surfHeight));
const quantColumn =  Math.floor( surfWidth / nodesDistance );  
const quantRow  =  Math.floor( surfHeight / nodesDistance );
const squareSize = 30;

let i = 0;
let outerCircle, innerCircle;  // animation objects [surface nodes]
let L;  //distance between cursor and circle center
let L1 = Math.sqrt(Math.pow(surfWidth, 2) + Math.pow(surfHeight, 2));
let idSquares = ""; //complete list of square ids 
let scalingFactor = 1; //square scaling factor 
let angle = 0; // angle of rotation of squares 


function Rectangle(id, positionX, positionY, width, height, fill) {
  // svg square constructor function
  this.id = id;
  this.positionX = positionX;
  this.positionY = positionY;
  this.width = width;
  this.height = height;
  this.fill = fill;

  this.draw = function() {                       
    SVGcontainer.innerHTML += 
     `<rect id="${this.id}" x="${this.positionX}" y="${this.positionY}" 
     width="${this.width}" height="${this.height}" fill="${this.fill}"/>`;
  }
}

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function randColor() {
  //random color generator [rgb]
  let r = Math.floor(getRandomFloat(0.2, 1) * (256)),
      g = Math.floor(getRandomFloat(0.2, 1) * (256)),
      b = Math.floor(getRandomFloat(0.2, 1) * (256));
  return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

function surfaceBuilding() { 
  let squareArray = [];
  for (let j = 1; j < quantRow; j++) {
    for (let k = 1; k < quantColumn; k++) { 
      i++;
      squareArray[i] = new Rectangle("k" + i, k * nodesDistance, 
                            j * nodesDistance, squareSize, squareSize, randColor());
      squareArray[i].draw();

    }
  }
}
surfaceBuilding();

function creatingListIdsquares(){
  i = 0;
  for (let j = 1; j < quantRow; j++) {
    for (let k = 1; k < quantColumn; k++) {
      i++;

      if ((k==(quantColumn-1))&(j==(quantRow-1))){
        idSquares = idSquares + "#" + "k" + i
      
      }
      else {
        idSquares = idSquares + "#" + "k" + i + ","
      }
    }
  }
};
creatingListIdsquares();

window.addEventListener('mousemove', function(e) {
  L = Math.sqrt(Math.pow((surfWidth-e.pageX), 2) + Math.pow((surfHeight-e.pageY), 2));
  scalingFactor=L/L1*2;

  gsap.set(idSquares, {transformOrigin: "50% 50%"});
  gsap.to(idSquares, { 
    duration: 4, 
    rotation: angle, 
    x: e.pageX-(surfWidth/2), 
    y: e.pageY-(surfHeight/2),
    width: squareSize*scalingFactor, 
    height: squareSize*scalingFactor,
    ease: "elastic.out(1, 0.3)", 
    stagger: 0.05});
  angle = angle+10;
    
}, false);
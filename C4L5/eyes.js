"use strict";
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const screenDiagonal = Math.sqrt( Math.pow(screenWidth, 2) + 
                                  Math.pow(screenHeight, 2));
const K = 2.4; //eyeball "rx" divided by pupil "r"
let numberOfEyes;
let rx;

function random(min, max) {
  return (Math.floor(Math.random() * (max - min + 1)) + min)
};

function randomColor() {
  let R = random(0, 256),
      G = random(0, 256),
      B = random(0, 256);
  return '#' + R.toString(16) + G.toString(16) + B.toString(16);
};

function Circle(id, rx, ry, cx, cy, fill) {
  this.id = id;
  this.rx = rx;
  this.ry = ry;
  this.cx = cx;
  this.cy = cy;
  this.fill = fill;

  this.draw = function() {svgContainer.innerHTML += 
  `<ellipse class="eyeball" id="eyeball${this.id}" rx="${this.rx}" 
  ry="${this.ry}" cx="${this.cx}" cy="${this.cy}" fill="white"/>
  <ellipse class="eyeball" id="eyeball${this.id}" rx="${this.rx}" 
  ry="${this.ry}" cx="${this.cx-rx*1.8}" cy="${this.cy}" fill="white"/>

  <circle id="pupil${this.id}" r="${this.rx/K}" 
  cx="${this.cx}" cy="${this.cy}" fill="${this.fill}"/>
  <circle id="pupil${this.id}" r="${this.rx/K}" 
  cx="${this.cx-rx*1.8}" cy="${this.cy}" fill="${this.fill}"/>

  <circle class="flare" id="flare${this.id}" 
  r="${this.rx/5}" cx="${this.cx}" cy="${this.cy}" fill="white"/>
  <circle class="flare" id="flare${this.id}" r="${this.rx/5}" 
  cx="${this.cx-rx*1.8}" cy="${this.cy}" fill="white"/>`
  }
};

function eyesAssembly() {
  numberOfEyes = random(5, 20);
  for (let i = 1; i < numberOfEyes; i++) {
    rx = random(10, 32);
    // rx = random(14, 44);
    new Circle( i, rx, rx * 1.5, 
                random(50, screenWidth - 50), 
                random(50, screenHeight - 50), randomColor() ).draw();
  }
};

eyesAssembly();

window.addEventListener('mousemove', function(e) {
  let L, cx, cy, dx, dy;
  for (let i = 1; i < numberOfEyes; i++) {
    cx = gsap.getProperty("#eyeball" + i, "cx");
    cy = gsap.getProperty("#eyeball" + i, "cy");
    rx = gsap.getProperty("#eyeball" + i, "rx");
    L = Math.sqrt( Math.pow((e.pageX - cx), 2) + 
                   Math.pow((e.pageY - cy), 2) );
    dx = (e.pageX - cx) / Math.sqrt(L) * rx / 8;
    dy = (e.pageY - cy) / Math.sqrt(L) * rx / 6;

    let pupilSizeNew = (rx / K) / 
                       (0.5 * L / screenDiagonal + 0.7);
             
    gsap.set("#eyeball"+i, {x: dx, y: dy}); 
    gsap.set("#pupil"+i, {x: dx * 1.2, y: dy * 1.3, r: pupilSizeNew});
    gsap.set("#flare"+i, {x: dx * 1.2 * 0.95, y: dy * 1.3 * 0.95});
  }

  if ((e.pageX < 100) || (e.pageX > (screenWidth - 100))) {
    svgContainer.innerHTML = ""; 
    eyesAssembly()
  };

}, false);


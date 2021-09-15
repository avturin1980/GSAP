"use strict";

const w = window.innerWidth / 2;
const h = window.innerHeight / 2;
const x0 = w - 345; const y0 = h - 345;
const x1 = w - 219; const y1 = h - 219;
const x2 = w - 278; const y2 = h - 278;
const x3  =w - 314; const y3 = h - 314;

svgContainer.innerHTML += 
   `<image xlink:href="shadow.png" x="${x0}" y="${y0}" 
           width ="690" height="690"/>
    <image id="clFace" xlink:href="clFace.png" x="${x0}" y="${y0}"
           width ="690" height="690"/>
    <image id="stars1" xlink:href="stars1.png" x="${x0}" y="${y0}" 
           width ="690" height="690"/>
    <image id="stars2" xlink:href="stars2.png" x="${x0}" y="${y0}" 
           width ="690" height="690"/>

    <image id="h" xlink:href="h.png" x="${x1}" y="${y1}" 
           width ="438" height="438"/>
    <image id="m" xlink:href="m.png" x="${x2}" y="${y2}" 
           width ="556" height="556"/>
    <image id="s" xlink:href="s.png" x="${x3}" y="${y3}" 
           width ="628" height="628"/>` 

let data = new Date();
let minutes = 360 / 60 * data.getMinutes();
let seconds = 360 / 60 * data.getSeconds();

let tl = gsap.timeline({defaults: {ease: "linear", repeat: -1}}) 

.set("#h, #m, #s, #clFace, #stars1, #stars2", {svgOrigin: w + " " + h})
.set("#s", {rotation: seconds})
.set("#m", {rotation: minutes + seconds / 60})
.set("#h", {rotation: 360 / 12 * data.getHours() + minutes / 12})

.to("#s", 60, {rotation: "+=360", snap: {rotation: 6 }})
.to("#m", 3600, {rotation: "+=360"}, "<")
.to("#h", 43200, {rotation: "+=360"}, "<")

.to("#clFace", 50, {rotation: "+=360"}, "<")
.to("#stars1", 40, {rotation: "+=360"}, "<")
.to("#stars2", 30, {rotation: "+=360"}, "<")











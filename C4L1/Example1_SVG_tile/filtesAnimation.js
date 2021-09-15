"use strict";

window.addEventListener('mousemove', function(e) {	
  gsap.set("#feTile", {attr: {width: e.pageX, height: e.pageY}});
}, false);






















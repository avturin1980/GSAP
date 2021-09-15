"use strict";

window.addEventListener('mousemove', function(e) {	
  gsap.set("#im1", {filter: 
    "invert(" + (e.pageX / window.innerWidth * 100) + "%)"
  });

  gsap.set("#im2", {filter: 
    "hue-rotate(" +  (e.pageX / window.innerWidth * 100 * 10) + "deg)"
  });

  gsap.set("#im3", {filter: 
    "saturate(" + (100 - e.pageX / window.innerWidth * 100) + "%)"
  });

  gsap.set("#im4", {filter: 
    "opacity(" + (e.pageX / window.innerWidth * 100) + "%)" +
    "blur(" + (window.innerWidth - e.pageX) / 50  + "px)"
  });
}, false)







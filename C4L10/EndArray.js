"use strict";

let array = [-200, 600, 0];

gsap.to(array, 10, {
    endArray: [100, 350, 600],
    onUpdate() {
        gsap.set("#b", {x: array[0]});
        gsap.set("#g", {x: array[1]});
        gsap.set("#r", {x: array[2]});

        out1.innerHTML = array[0];
        out2.innerHTML = array[1];
        out3.innerHTML = array[2];
    },
    ease: "steps(20)"
});









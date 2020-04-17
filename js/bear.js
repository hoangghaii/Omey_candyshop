"use strict";
//based off of Tiantian Xu's 100 Days of Motion Design
// https://uxdesign.cc/100-days-of-motion-design-463526af852f
// Animation could have been done in pure CSS but wanted to dabble with GSAP!
var ease = "linear";
var duration = 7;
function wind(balloon) {
    TweenMax.staggerFromTo(balloon, Math.floor(Math.random() * 5 + 2), { y: -20, rotation: -5 }, {
        y: 20,
        rotation: 5,
        ease: Sine.easeInOut,
        yoyo: true,
        repeat: -1
    },
        0.001);
}
function move(balloon, delay) {
    gsap.to(balloon, {
        duration: duration,
        ease: ease,
        x: 160,
        delay: delay,
        repeat: -1,
        startAt: { x: -80 }
    });

    wind(balloon);
}
move(".balloon1", 0);
move(".balloon2", 3);
move(".balloon3", 2);
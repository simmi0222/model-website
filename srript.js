var tl = gsap.timeline();

// tl
// .from("#nav", {
//     opacity :0,
//     x : 400,
//     duration : 1,
//     delay : 1,
// })
// .from("#menu-section", {
//     opacity :0,
//     x : 400,
//     duration : 1,
//     // delay : 1,
// })

var igc = gsap.timeline();

igc
.to(".imagecontainer", {
    width : "100%",
    ease : Expo.ease,
    stagger :2,
    delay:3,
}, 'b')
.to(".imagecontainer", {
    width : "100%",
    ease : Expo.ease,
    stagger :2,
    delay:3,
},'b')


.to(".text h1", {
    width : "100%",
    ease : Expo.easeInOut,
    stagger :2,
    top : 0,
    delay:4,
}, 'b')
.to(".text h1", {
    width : "100%",
    ease : Expo.easeInOut,
    stagger :2,
    top : '-100%',
    delay: 4,
},'b')


// -------------------------------------------------
// var nav = document.querySelector('#nav-2');
// var crsr = document.querySelector('#cursor');
// // var h1 = document.querySelector('h1');

// nav.addEventListener("mousemove",function (dets) {
//     crsr.style.left = (dets.x) + "px";
//     crsr.style.top = dets.y + "px";
// })
// -------------------------------------------------

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('#menu-section');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};
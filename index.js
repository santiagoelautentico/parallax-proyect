/* Opening Animation */
let tween = gsap.from(".spiderAnimation", {
  duration: 1.5,
  y: 550,
  stagger: 0.5,
  delay: 0.2,
});
gsap.from(".title", {
  duration: 1.5,
  y: 700,
  stogger: 0.5,
  delay: 0.2,
});
gsap.from(".header", {
  duration: 1.5,
  y: -200,
  stogger: 0.5,
  delay: 0,
});

let tobyImage = document.getElementById("tobyImage");
let title = document.getElementById("title");
let tomImage = document.getElementById("tomImage");
let andrewImage = document.getElementById("andrewImage");
/* Exit Animation */
/*window.addEventListener('scroll', function(){
    let value = window.scrollY;
    title.style.marginTop = value * 1 + 'px'
    tomImage.style.translate = value * -0.5 + 'px';
    tobyImage.style.translate = value * 0.5 + 'px';
    andrewImage.style.marginBottom = value * 0.5 + 'px';
});*/

let tlTom = gsap.timeline({
  scrollTrigger: {
    trigger: ".tomImage",
    start: 20,
    end: "botton-center",
    scrub: true,
    markers: false,
  },
});

let tlToby = gsap.timeline({
  scrollTrigger: {
    trigger: ".tobyImage",
    start: 20,
    end: "botton-center",
    scrub: true,
    markers: false,
  },
});
let tlAndrew = gsap.timeline({
  scrollTrigger: {
    trigger: ".tomImage",
    start: 20,
    end: "botton-center",
    scrub: true,
    markers: false,
  },
});
let tlTitle = gsap.timeline({
  scrollTrigger: {
    trigger: ".title",
    start: 20,
    end: "botton-center",
    scrub: true,
    markers: false,
  },
});
let tlTomSpiderSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".title",
    start: 'botton-center',
    end: "middle-center",
    scrub: true,
    markers: false,
  },
});
tlTom.to(".tomImage", {
  x: -800,
});
tlToby.to(".tobyImage", {
  x: 800,
});
tlAndrew.to(".andrewImage", {
  y: 700,
});
tlTitle.to(".title", {
  y: 800,
});

//TITLE ASP1 OPENING CARD
const cardAsp1TitleHover = document.getElementById("cardAsp1");
cardAsp1TitleHover.addEventListener("mouseover", () => {
  let titleShow = document.getElementById("titleAsp1Card");
  const classCheck = document.getElementById("titleAsp1Card");
  if (classCheck.classList.contains("inActive")) {
    titleShow.classList.remove("inActive");
    titleShow.classList.add("active");
  }
});
cardAsp1TitleHover.addEventListener("mouseout", () => {
  let titleShow = document.getElementById("titleAsp1Card");
  const classCheck = document.getElementById("titleAsp1Card");
  if (classCheck.classList.contains("active")) {
    titleShow.classList.remove("active");
    titleShow.classList.add("inActive");
  }
});

//TEXT ASP1 OPENING CARD
const cardAsp1TextHover = document.getElementById("cardAsp1");
cardAsp1TextHover.addEventListener("mouseover", () => {
  let titleShow = document.getElementById("textAsp1Card");
  const classCheck = document.getElementById("textAsp1Card");
  if (classCheck.classList.contains("inActive")) {
    titleShow.classList.remove("inActive");
    titleShow.classList.add("active");
  }
});
cardAsp1TextHover.addEventListener("mouseout", () => {
  let titleShow = document.getElementById("textAsp1Card");
  const classCheck = document.getElementById("textAsp1Card");
  if (classCheck.classList.contains("active")) {
    titleShow.classList.remove("active");
    titleShow.classList.add("inActive");
  }
});
//TITLE ASP2 OPENING CARD
const cardAsp2TitleHover = document.getElementById("cardAsp2");
cardAsp2TitleHover.addEventListener("mouseover", () => {
  let titleShow = document.getElementById("titleAsp2Card");
  const classCheck = document.getElementById("titleAsp2Card");
  if (classCheck.classList.contains("inActive")) {
    titleShow.classList.remove("inActive");
    titleShow.classList.add("active");
  }
});
cardAsp2TitleHover.addEventListener("mouseout", () => {
  let titleShow = document.getElementById("titleAsp2Card");
  const classCheck = document.getElementById("titleAsp2Card");
  if (classCheck.classList.contains("active")) {
    titleShow.classList.remove("active");
    titleShow.classList.add("inActive");
  }
});

//TEXT ASP2 OPENING CARD
const cardAsp2TextHover = document.getElementById("cardAsp2");
cardAsp2TextHover.addEventListener("mouseover", () => {
  let titleShow = document.getElementById("textAsp2Card");
  const classCheck = document.getElementById("textAsp2Card");
  if (classCheck.classList.contains("inActive")) {
    titleShow.classList.remove("inActive");
    titleShow.classList.add("active");
  }
});
cardAsp2TextHover.addEventListener("mouseout", () => {
  let titleShow = document.getElementById("textAsp2Card");
  const classCheck = document.getElementById("textAsp2Card");
  if (classCheck.classList.contains("active")) {
    titleShow.classList.remove("active");
    titleShow.classList.add("inActive");
  }
});

const lenis = new Lenis();

/*Smooth animation*/
lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 1500,
  delay: 100,
});
ScrollReveal().reveal(".proArticle");
ScrollReveal().reveal(".consArticle");
ScrollReveal().reveal(".andrewTitle");
ScrollReveal().reveal(".tomSpiderImage", { delay: 350 });


const cursor = document.querySelector(".cursor");
const page1 = document.querySelector("#page1");
gsap.registerPlugin(ScrollTrigger);
function cursorEffect() {
  page1.addEventListener("mousemove", (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
  });

  page1.addEventListener("mouseleave", (e) => {
    cursor.remove();
  });

  page1.addEventListener("mouseenter", (e) => {
    if (!document.contains(cursor)) {
      page1.appendChild(cursor);
      cursor.style.zIndex = "1";
    }
  });
}

gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
  defaults: { ease: "power1.out" },
});

tl.from("#page1-content #navbar", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

tl.from("#page1-content #main-heading", {
  y: 100,
  opacity: 0,
  duration: 0.7,
});

var tl2 = gsap.timeline({
  defaults: { ease: "power1.out" },
});

// Animation for elements in #page2
tl2
  .from("#page2 .page2-header .header-content span", {
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      start: "top 60%",
      end: "top 40%",
      scrub: true,
    },
  })
  .from("#page2 .page2-header .border", {
    scaleX: 0,
    duration: 0.8,
    transformOrigin: "left center",
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      start: "top 60%",
      end: "top 40%",
      scrub: true,
    },
  })
  .from("#page2 .content", {
    opacity: 0,
    y: 50,
    duration: 0.5,
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#page2 .content",
      start: "top 80%",
      end: "top 60%",
      scrub: true,
    },
  });


  gsap.from("#page3 #Part-1 #firstH1::before", {
 width:"0%",
 opacity:0,
 duration:2
  });
cursorEffect();


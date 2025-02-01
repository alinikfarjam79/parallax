const Fabrics = document.getElementById("fabrics");
const sustain = document.getElementById("sustain");
const about = document.getElementById("about");

function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    lerp: 0.03,
    smooth: true,
    getDirection: true,
    smoothMobile: true,
    mobile: {
      breakpoint: 0,
      inertia: 0.2,
      lerp: 0.5,
      smooth: true,
      getDirection: true,
    },
    tablet: {
      breakpoint: 0,
      inertia: 0.2,
      lerp: 0.5,
      smooth: true,
      getDirection: true,
    },
    smartphone: {
      breakpoint: 0,
      inertia: 0.2,
      lerp: 0.5,
      smooth: true,
      getDirection: true,
    }
  });
  new ResizeObserver(() => scroll.update()).observe(document.querySelector("#main"));

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },

    // follwoing line is not required to work pinning on touch screen

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

}
loco();

function hide() {
  var hover = document.getElementById("contactusOverlay");
  hover.style.width = "0%";
  hover.style.height = "0%";
};
function show() {
  var hover = document.getElementById("contactusOverlay");
  hover.style.width = "100%";
  hover.style.height = "100%";
}

var csr = document.getElementById("cursor");
document.addEventListener("mousemove", function (dets) {
  csr.style.top = dets.y + 15 + "px"
  csr.style.left = dets.x + 5 + "px"
})

let elemall = document.querySelectorAll("a");
elemall.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    csr.style.scale = 2
    csr.style.border = "1px solid rgb(214, 217, 210)"
    csr.style.backgroundColor = "transparent"
  });
  elem.addEventListener("mouseleave", function () {
    csr.style.scale = 1
    csr.style.border = ""
    csr.style.backgroundColor = "transparent"
  });
})


// Fabrics.addEventListener('mouseenter',function(){
//   document.getElementById("footerleft").style.backgroundImage = "url('./assets/title-fabrics.jpg')";
//   document.getElementById("footerleft").style.animation="fadeIn 0.4s";
//   document.getElementById("footerleft").style.backgroundSize="cover";
// });
// sustain.addEventListener('mouseenter',function(){
//   document.getElementById("footerleft").style.backgroundImage = "url('./assets/title-sustainability.jpg')";
//   document.getElementById("footerleft").style.backgroundSize="cover";
//   document.getElementById("footerleft").style.animation="fadeIn 0.4s";
// });
// about.addEventListener('mouseenter',function(){
//   document.getElementById("footerleft").style.backgroundImage = "url('./assets/title-about.jpg')";
//   document.getElementById("footerleft").style.backgroundSize="cover";
//   document.getElementById("footerleft").style.animation="fadeIn 0.4s";
// });

// about.addEventListener('mouseleave',function(){
//   document.getElementById("footerleft").style.backgroundImage = "url(./assets/img-footer-1154x1536.avif)";
//   document.getElementById("footerleft").style.animation="fadeOut 0.4s";
//   document.getElementById("footerleft").style.backgroundSize="cover";
// });
// sustain.addEventListener('mouseleave',function(){
//   document.getElementById("footerleft").style.backgroundImage = "url(./assets/img-footer-1154x1536.avif)";
//   document.getElementById("footerleft").style.animation="fadeOut 0.4s";
//   document.getElementById("footerleft").style.backgroundSize="cover";
// });
// Fabrics.addEventListener('mouseleave',function(){
//   document.getElementById("footerleft").style.backgroundImage = "url(./assets/img-footer-1154x1536.avif)";
//   document.getElementById("footerleft").style.animation="fadeOut 0.4s";
//   document.getElementById("footerleft").style.backgroundSize="cover";
// });


var clutter1 = "";

document.querySelector("#containtext>h1").textContent.split("").forEach(function (dets) {
  clutter1 += `<div>${dets}</div>`;

  document.querySelector("#containtext>h1").innerHTML = clutter1;
});



gsap.to("nav", {
  backgroundColor: "rgba(255, 255, 255, 0.748)",
  duration: 0.9,
  height: "9vh",
  backdropFilter: "blur(2px)",
  scrollTrigger: {
    trigger: "nav",
    scroller: "#main",
    start: "top -14%",
    end: "top -11%",
    scrub: 2,
  }
})

gsap.from("#page2-text>button", {
  x: -50,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page2-text>button",
    scroller: "#main",
    start: "top 100%",
    end: "bottom 70%",
    scrub: 2,
  }
})

var tl1 = gsap.timeline();

tl1.from("#containtext div", {
  opacity: 0,
  y: -80,
  duration: 0.25,
  stagger: 0.12,
})
tl1.to("#overlay-mid button", {
  opacity: 1,
  duration: 0.5
})


gsap.to("#background", {
  scale: 1.3,
  scrollTrigger: {
    trigger: "#background",
    scroller: "#main",
    start: "top top",
    end: "bottom 0%",
    scrub: true,
  }
})

var clutter2 = "";

document.querySelector("#text1>h3").textContent.split("").forEach(function (dets) {
  clutter2 += `<span>${dets}</span>`;

  document.querySelector("#text1>h3").innerHTML = clutter2;
});

var tl2 = gsap.timeline();

tl2.to("#text1>h3>span", {
  color: "black",
  scrollTrigger: {
    trigger: "#text1>h3>span",
    scroller: "#main",
    start: "top 90%",
    end: "bottom 30%",
    scrub: 1,
  },
  stagger: 1,
})

gsap.from("#textpage3", {
  opacity: 0,
  x: 360,
  scrollTrigger: {
    trigger: "#textpage3",
    scroller: "#main",
    start: "top 100%",
    end: "bottom 50%",
    scrub: true,
  }
})
gsap.from("#page6right", {
  opacity: 0,
  y: 60,
  scrollTrigger: {
    trigger: "#page6right",
    scroller: "#main",
    start: "top 100%",
    end: "bottom 20%",
    scrub: true,
  }
})

var clutter3 = "";
document.querySelector("#textOverlayPage4 p").textContent.split("").forEach(function (dets) {
  clutter3 += `<span>${dets}</span>`;

  document.querySelector("#textOverlayPage4 p").innerHTML = clutter3;
});

var tl3 = gsap.timeline();

tl3.to("#textOverlayPage4>p>span", {
  color: "white",
  scrollTrigger: {
    trigger: "#textOverlayPage4>p>span",
    scroller: "#main",
    start: "top 98%",
    end: "bottom 20%",
    scrub: 1,
  },
  stagger: 1,
})

gsap.from("#imgpage5righttop", {
  scale: 0.8,
  scrollTrigger: {
    trigger: "#imgpage5righttop",
    scroller: "#main",
    start: "-10% 78%",
    end: "top 30%",
    scrub: 1,
  }
})
gsap.to("#imgleft5", {
  scale: 1.1,
  scrollTrigger: {
    trigger: "#imgleft5",
    scroller: "#main",
    start: "top 120%",
    end: "bottom 0% ",
    scrub: 1,
  }

})
gsap.to("#imgright5", {
  scale: 1.1,
  scrollTrigger: {
    trigger: "#imgright5",
    scroller: "#main",
    start: "-40% 100%",
    end: "top 40%",
    scrub: 1,
  }
})

gsap.from("#textpage6>button", {
  x: -50,
  opacity: 0,
  scrollTrigger: {
    trigger: "#textpage6>button",
    scroller: "#main",
    start: "top 100%",
    end: "bottom 88%",
    scrub: 2,
  }
})

var clutter4 = "";
document.querySelector("#textpage6 p").textContent.split("").forEach(function (dets) {
  clutter4 += `<span>${dets}</span>`;

  document.querySelector("#textpage6 p").innerHTML = clutter4;
});

var tl4 = gsap.timeline();

tl4.to("#textpage6>p>span", {
  color: "black",
  scrollTrigger: {
    trigger: "#textpage6>p>span",
    scroller: "#main",
    start: "top 98%",
    end: "top 40%",
    scrub: 1,
  },
  stagger: 1,
})


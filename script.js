gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollTrigger.normalizeScroll(true);

const scroller = ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".content",
  smooth: 1.5,
  effects: true,
  normalizeScroll: true,
});

ScrollTrigger.refresh();

function menu() {
  var mbox = document.querySelector(".menubox");
  var on = document.querySelector(".ri-camera-line");
  var off = document.querySelector(".ri-camera-off-line");
  var toggle = 0;
  var mbtn = document.querySelector(".menubtn");

  mbtn.addEventListener("click", function () {
    if (toggle === 0) {
      gsap.to(mbox, {
        display: "flex",
        height: "100vh",
        onUpdate: () => {
          on.style.display = "none";
          off.style.display = "flex";
        },
      });
      gsap.to(".linkbox a", {
        delay: 0.3,
        opacity: 1,
        marginRight: "0vmax",
        stagger: 0.1,
      });
      toggle = 1;
    } else {
      gsap.to(mbox, {
        delay: 0.7,
        height: "0vh",
        bottom: "100%",
        duration: 0.5,
        onUpdate: () => {
          off.style.display = "none";
          on.style.display = "flex";
        },
        onComplete: function () {
          mbox.style.bottom = "0%";
        },
      });
      gsap.to(".linkbox a", {
        opacity: 0,
        marginRight: "10vmax",
        stagger: 0.1,
      });
      toggle = 0;
    }
  });
}
menu();

function sec1() {
  var tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".imgbox-holder",
      start: "top top",
      pin: true,
      end: "+=60%",
      scrub: 1,
    },
  });

  tl1
    .to(
      ".s1",
      {
        left: "-50%",
        ease: Power2.easeInOut,
      },
      "abcd"
    )
    .to(
      ".m1",
      {
        left: "-50%",
        ease: Power2.easeInOut,
      },
      "abcd"
    )
    .to(
      ".m2",
      {
        right: "-50%",
        ease: Power2.easeInOut,
      },
      "abcd"
    )
    .to(
      ".s2",
      {
        right: "-50%",
        ease: Power2.easeInOut,
      },
      "abcd"
    )
    .to(
      ".l",
      {
        width: "100%",
        ease: Power2.easeInOut,
      },
      "abcd"
    );
}
sec1();

function sec2() {
  gsap.to(".marqueebox h1", {
    repeat: -1,
    x: "-100%",
    ease: "linear",
    duration: 8,
  });

  gsap.to(".imgbox3D", {
    scrollTrigger: {
      trigger: ".sec2",
      start: "top top",
      pin: true,
      scrub: 2,
      marker: true,
    },
    top: "-100%",
    onUpdate: () => {
      let img = document.querySelector(".imgbox3D");
      let imgRect = document
        .querySelector(".imgbox3D")
        .getBoundingClientRect().top;
      let val = Math.floor(imgRect * 0.007);
      let scalingRange = gsap.utils.mapRange(10, -10, 1, 2, val);
      img.style.transform = `translate(-50%, 0) scale(${scalingRange}) rotate3d(1,1,0,${
        imgRect * 0.08
      }deg)`;
    },
  });
}

sec2();

function sec3() {
  let workboxes = document.querySelectorAll(".workbox");

  workboxes.forEach((wb) => {
    wb.addEventListener("mousemove", function (dets) {
      wb.children[1].style.opacity = 1;
      wb.children[1].style.transform = `translate(${dets.screenX * 0.3}px, -${
        dets.screenY * 0.05
      }px) rotate(${dets.screenX * 0.02}deg)`;
    });

    wb.addEventListener("mouseleave", function () {
      wb.children[1].style.opacity = 0;
    });
  });
}

sec3();

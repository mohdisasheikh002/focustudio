gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".content",
  smooth: 1.5,
  effects: true,
});

function menu() {
  var on = document.querySelector(".ri-camera-line");
  var off = document.querySelector(".ri-camera-off-line");
  var mbox = document.querySelector(".menubox");

  on.addEventListener("click", function () {
    gsap.to(mbox, {
      left: "0",
      duration: 0.5,
      onUpdate: () => {
        on.style.display = "none";
        off.style.display = "flex";
      },
    });
  });

  off.addEventListener("click", function () {
    gsap.to(mbox, {
      left: "100%",
      duration: 0.5,
      onUpdate: () => {
        off.style.display = "none";
        on.style.display = "flex";
      },
    });
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

/*
function textAnimation() {
  let texts = document.querySelectorAll(".animText");

  gsap.set(".animText", { opacity: 0 });

  texts.forEach((t) => {
    gsap.to(t, {
      scrollTrigger: {
        trigger: t,

        start: "top 100%",
      },
      opacity: 1,
      onStart: function () {
        $(t).textillate({ in: { effect: "fadeInUp" } });
      },
    });
  });
}
textAnimation();
*/

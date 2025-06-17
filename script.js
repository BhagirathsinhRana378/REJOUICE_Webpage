function text_Animation() {
  let tag = document.querySelector(".page_content h1");

  let tag_text = tag.textContent;

  function breaking_the_text() {
    let tag = document.querySelector(".page_content h1");

    let tag_text = tag.textContent;

    let splitted_text = tag_text.split("");

    let clutter = ""

    let halfvalue = Math.floor(splitted_text.length / 2)

    splitted_text.forEach(function (e, idx) {
      if (idx < halfvalue) {
        clutter += `<span class="a">${e}</span>`
      }
      else {
        clutter += `<span class="b">${e}</span>`
      }


    });// this whole is fro breaking  the h1 and rejoint it as seprate elements

    tag.innerHTML = clutter;
    // till here we have brocked the h1 and rejoint it as a seprate elements

  }
  breaking_the_text();

  // Run GSAP animations after DOM is updated
  gsap.from("h1 .a", {
    y: 30,
    delay: 2.7,
    duration: 1,
    opacity: 0,
    stagger: 0.2
  });
  gsap.from("h1 .b", {
    y: 30,
    delay: 2.7,
    duration: 1,
    opacity: 0,
    stagger: -0.2
  });

}
function cursor_Animation() {

  let main = document.querySelector(".main");
  let Cursor = document.querySelector(".cursor");

  function cursor() {
    main.addEventListener("mousemove", function (ele) {
      gsap.to(Cursor, {
        x: ele.x,
        y: ele.y,
        duration: 0.8,
        delay: 0.1,
        ease: "elastic.out"
      })
    })
  }
  cursor()

}
function locomotiveJs() {
  // Register the ScrollTrigger plugin with GSAP
  gsap.registerPlugin(ScrollTrigger);

  // Check if LocomotiveScroll is available
  if (typeof LocomotiveScroll === "undefined") {
    console.error("LocomotiveScroll is not loaded.");
    return;
  }

  // Initialize Locomotive Scroll
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });

  // Sync ScrollTrigger with Locomotive Scroll
  locoScroll.on("scroll", ScrollTrigger.update);

  // Set up scroller proxy for ScrollTrigger
  ScrollTrigger.scrollerProxy(".main", {
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
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed"
  });

  // Red Panel Animation
  gsap.from(".line-1", {
    scrollTrigger: {
      trigger: ".line-1",
      scroller: ".main",
      scrub: true,
      start: "top bottom",
      end: "top top",
      onUpdate: self => console.log(self.direction)
    },
    scaleX: 0,
    transformOrigin: "left center",
    ease: "none"
  });

  // Orange Panel Animation
  gsap.from(".line-2", {
    scrollTrigger: {
      trigger: ".orange",
      scroller: ".main",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%"
    },
    scaleX: 0,
    transformOrigin: "left center",
    ease: "none"
  });

  // Purple/Green Panel Timeline
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".purple",
      scroller: ".main",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%"
    }
  });

  tl.from(".purple p", {
    scale: 0.3,
    rotation: 45,
    autoAlpha: 0,
    ease: "power2"
  })
    .from(".line-3", {
      scaleX: 0,
      transformOrigin: "left center",
      ease: "none"
    }, 0)
    .to(".purple", {
      backgroundColor: "#28a92b"
    }, 0);

  // Refresh ScrollTrigger after setup
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
function text_Up() {
  gsap.from(".page2 p", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2, // smaller = faster between items
    scrollTrigger: {
      trigger: ".page2",
      scroller: ".main",
      start: "top 80%",
      end: "top 40%",
      scrub: 1
    }
  });
}
function video_Animation() {
  gsap.to(".video", {
    scale: 0.3,
    duration: 1.5
  });

  let main = document.querySelector('.main');

  main.addEventListener("wheel", function (ele) {
    let Y = ele.deltaY;
    if (Y < 0) {
      gsap.to(".video", {
        scale: 0.4,
        duration: 1.5,
        delay: 1.5,
        scrollTrigger: {
          trigger: ".page5 video",
          scroll: ".main",
          start: "top 50%",
          end: "top 10%",
          scrub: 3
        }
      });

    }
    else {
      gsap.to(".video", {
        scale: 1,
        duration: 1.5,
        delay: 1.5,
        scrollTrigger: {
          trigger: ".page5 video",
          scroll: ".main",
          start: "top 100%",
          end: "top 30%",
          scrub: 3
        }
      });


    }

  });
}
function loder(){
let tl = gsap.timeline();

tl.from(".loder h3", {
  x: 200,
  opacity: 0,
  duration: 1,
  stagger: 0.2
})

tl.to(".loder h3", {
  opacity: 0,
  y: -20,
  duration: 1,
  stagger: 0.1
})

tl.to(".loder", {
  opacity: 0,
})
tl.to(".loder", {
  display: "none",
})

}
function scrolling_animation() {
    window.addEventListener("wheel", function (scroll) {
        if (scroll.deltaY > 0) {

            gsap.to(".marque", {
                transform: 'translateX(-200%)',
                duration: 4,
                repeat: -1,
                ease: "none"
            })
            gsap.to(".marque img", {
                rotate: 180
            })


        }
        else {
            gsap.to(".marque", {
                transform: 'translateX(0%)',
                duration: 4,
                repeat: -1,
                ease: "none"
            })
            gsap.to(".marque img", {
                rotate: 0
            })
        }
    })


}










// -----------------function--calls-----------
text_Animation();
cursor_Animation();
locomotiveJs();
text_Up();
video_Animation();
loder();
scrolling_animation();
// -------------------------------------------
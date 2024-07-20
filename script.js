gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", { // Changed from ".smooth-scroll" to "#main"
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

function cursorEffect() {
    var page1Content = document.querySelector("#page1-content");
    var cursor = document.querySelector("#cursor");

    page1Content.addEventListener("mousemove", function(dets) {
        gsap.to(cursor, {
            x: dets.x, // Changed from dets.x to dets.clientX
            y: dets.y, // Changed from dets.y to dets.clientY
          
        });
    });

    page1Content.addEventListener("mouseenter", function() {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1,
           
        });
    });

    page1Content.addEventListener("mouseleave", function() {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0,
            
        });
    });
}
cursorEffect();


// function page2Animation(){
//     gsap.registerPlugin(ScrollTrigger);

//     scroll.on('scroll', ScrollTrigger.update);
    
//     ScrollTrigger.scrollerProxy("#main", {
//         scrollTop(value) {
//             return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
//         },
//         getBoundingClientRect() {
//             return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//         },
//         pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
//     });
    
//     ScrollTrigger.addEventListener('refresh', () => scroll.update());
    
//     ScrollTrigger.refresh();
    
//     // Animation for the page2 div
//     gsap.from("#page2-head h2", {
//         scrollTrigger: {
//             trigger: "#page2",
//             scroller: "#main", // This is important for Locomotive Scroll
//             start: "top 80%", // When the top of the trigger hits 80% of the viewport height
//             end: "top 20%", // When the top of the trigger hits 20% of the viewport height
//             toggleActions: "play none none reverse", // Play animation on enter, reverse on leave
//             markers: true // Remove or set to false to hide markers
//         },
//         y: 20,
//         opacity: 0,
//         duration: 1.5,
//         stagger: 0.5,
//         ease: "power2.out"
//     });
    
//     gsap.from("#page2-bot h1", {
//         scrollTrigger: {
//             trigger: "#page2",
//             scroller: "#main", // This is important for Locomotive Scroll
//             start: "top 80%",
//             end: "top 20%",
//             toggleActions: "play none none reverse",
//             markers: true
//         },
//         y: 20,
//         opacity: 0,
//         duration: 1.5,
//         ease: "power2.out"
//     });
// }

// page2Animation()
function cursorEffect5() {
  var page5Content = document.querySelector("#page5");
  var cursor1 = document.querySelector("#cursor1");

  page5Content.addEventListener("mousemove", function(dets) {
      gsap.to(cursor1, {
          x: dets.clientX, // Changed from dets.x to dets.clientX
          y: dets.clientY, // Changed from dets.y to dets.clientY
        
      });
  });

  page5Content.addEventListener("mouseenter", function() {
      gsap.to(cursor1, {
          scale: 1,
          opacity: 1,
         
      });
  });

  page5Content.addEventListener("mouseleave", function() {
      gsap.to(cursor1, {
          scale: 0,
          opacity: 0,
          
      });
  });
}
cursorEffect5();

function swiper()
{
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay:{
      delay:9000,
      disableOnInteraction: true
    },
    loop: true,
    
  });
}
swiper();

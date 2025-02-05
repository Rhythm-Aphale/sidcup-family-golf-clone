var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+30 + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x - 250 + "px";
    blur.style.top  = dets.y - 250 + "px";


})
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale=3;
        crsr.style.border="1px solid #fff";
        crsr.style.backgroundColor="transparent";
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale=1;
        crsr.style.border="0px solid #95C11E";
        crsr.style.backgroundColor= "#85C11E";
    })

    
})

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height:"110px",
    scrollTrigger: {
        trigger: "#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -10%",
        scrub:  1,
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:  2,
    }
})

gsap.from("#about-us img,#about-us-in", {
    y:50,
    opacity:0,
    duration: 1,
    // stagger: 0.5,
    scrollTrigger: {
        trigger: "#about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:  3,
    }
})


gsap.from(".card", {
    scale:0.8,
    opacity:0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:  1,
    }
})


gsap.from("#colon1", {
    y:-70,
    x:-70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:  4,
    }
})


gsap.from("#colon2", {
    y:70,
    x:70,
    scrollTrigger: {
        trigger: "#colon2",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:  4,
    }
})

gsap.from("#page4 h1", {
    y:50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller:"body",
        start:"top 85%",
        end:"top 70%",
        scrub:  2,
    }
})



// Check if mobile device
const isMobile = window.matchMedia("(max-width: 768px)").matches;

// Cursor logic only for desktop
if (!isMobile) {
    var crsr = document.querySelector("#cursor");
    var blur = document.querySelector("#cursor-blur");

    document.addEventListener("mousemove", function(dets){
        crsr.style.left = dets.x+30 + "px";
        crsr.style.top = dets.y + "px";
        blur.style.left = dets.x - 250 + "px";
        blur.style.top  = dets.y - 250 + "px";
    });

    // Hover effects only for desktop
    var h4all = document.querySelectorAll("#nav h4");
    h4all.forEach(function(elem){
        elem.addEventListener("mouseenter", function(){
            crsr.style.scale=3;
            crsr.style.border="1px solid #fff";
            crsr.style.backgroundColor="transparent";
        });
        elem.addEventListener("mouseleave", function(){
            crsr.style.scale=1;
            crsr.style.border="0px solid #95C11E";
            crsr.style.backgroundColor= "#85C11E";
        });
    });
}

// GSAP animations with mobile adjustments
gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: isMobile ? "80px" : "110px",
    scrollTrigger: {
        trigger: "#nav",
        scroller:"body",
        start: isMobile ? "top -5%" : "top -10%",
        end: "top -10%",
        scrub: 1,
    }
});

if (!isMobile) {
    gsap.to("#main", {
        backgroundColor: "#000",
        scrollTrigger: {
            trigger: "#main",
            scroller:"body",
            start:"top -25%",
            end:"top -70%",
            scrub: 2,
        }
    });
}

// Mobile-optimized animations
gsap.from("#about-us img,#about-us-in", {
    y: isMobile ? 20 : 50,
    opacity:0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-us",
        scroller:"body",
        start: isMobile ? "top 80%" : "top 70%",
        end: "top 65%",
        scrub: 3,
    }
});

gsap.from(".card", {
    scale:0.8,
    opacity:0,
    duration: isMobile ? 0.6 : 1,
    stagger: isMobile ? 0.3 : 0.1,
    scrollTrigger: {
        trigger: ".card",
        scroller:"body",
        start: isMobile ? "top 85%" : "top 70%",
        end: "top 65%",
        scrub: 1,
    }
});

if (!isMobile) {
    gsap.from("#colon1", {
        y:-70,
        x:-70,
        scrollTrigger: {
            trigger: "#colon1",
            scroller:"body",
            start:"top 70%",
            end:"top 65%",
            scrub: 4,
        }
    });

    gsap.from("#colon2", {
        y:70,
        x:70,
        scrollTrigger: {
            trigger: "#colon2",
            scroller:"body",
            start:"top 70%",
            end:"top 65%",
            scrub: 4,
        }
    });
}

gsap.from("#page4 h1", {
    y: isMobile ? 30 : 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller:"body",
        start: isMobile ? "top 90%" : "top 85%",
        end: "top 70%",
        scrub: 2,
    }
});

// Mobile orientation change handler
window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        document.querySelectorAll("#cursor, #cursor-blur").forEach(el => el.style.display = 'none');
    } else {
        document.querySelectorAll("#cursor, #cursor-blur").forEach(el => el.style.display = 'block');
    }
});
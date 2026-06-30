// Lenis CDN
const lenis = new Lenis({
    duration: 1.8,
    wheelMultiplier: 0.7,
    smoothWheel: true,
});
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Nav bar gsap animation
if (window.innerWidth > 768) {
    gsap.from("#navbar", {
        y: -100,
        delay: 0.8,
        duration: 1,
        opacity: 0
    })

    gsap.from("#navbar #details a", {
        y: -150,
        delay: 1,
        duration: 1,
        opacity: 0,
        stagger: 0.5
    })

    gsap.from("#center-icon", {
        z: -200,
        delay: 2.2,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#skills #center-icon",
            scroller: "#main",
        }
    })

}

gsap.from("#git", {
    x: -200,
    delay: 2.2,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: "#skills #git",
        scroller: "body",
        markers: false,
        start: "top 45%",
    }
})

gsap.from("#js", {
    x: -200,
    delay: 2.2,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: "#skills #js",
        scroller: "body",
    }
})

gsap.from("#css", {
    x: 200,
    delay: 2.2,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: "#skills #css",
        scroller: "#main",
    }
})

gsap.from("#vs", {
    x: 200,
    delay: 2.2,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: "#skills #vs",
        scroller: "body",
    }
})

gsap.from("#html", {
    y: 100,
    delay: 0.8,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: "#skills #html",
        scroller: "body",
    }
})

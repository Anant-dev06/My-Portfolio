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
        scroller: "body",
    }
})

gsap.from("#git", {
    x: -200,
    delay: 2.2,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: "#skills #git",
        scroller: "body",
        markers: false,
        start: "top 45%"
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
        scroller: "body",
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
    y: 200,
    delay: 3,
    duration: 1,
    opacity: 0,
    scrollTrigger: true
})

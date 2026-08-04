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

const lenis = new Lenis({
    prevent: (node) => node.id === "card-view",
});


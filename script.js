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



// Loader screen
const loader = document.querySelector(".loader");
const video = document.querySelector(".loader-video");

if (sessionStorage.getItem("loaderShown")) {
    // Loader already shown in this browser session
    loader.style.display = "none";
} else {
    // First visit in this session
    sessionStorage.setItem("loaderShown", "true");

    video.addEventListener("ended", () => {
        loader.style.display = "none";
    });
}
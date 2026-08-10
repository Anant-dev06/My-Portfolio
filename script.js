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


// For menu effect
let menubtn = document.querySelector("#menubtn");
let menubox = document.querySelector("#menu-box");
let menucl = document.querySelector("#menu-cl");

function openMenu() {
    menubox.style.display = "block";

    gsap.fromTo("#menu-box",
        {
            x: 500,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            duration: 0.8
        }
    );

    menubtn.style.display = "none";
    menucl.style.display = "block";
}

function closeMenu() {
    gsap.to("#menu-box", {
        x: 500,
        opacity: 0,
        duration: 0.8,
        onComplete: () => {
            menubox.style.display = "none";
        }
    });

    menubtn.style.display = "block";
    menucl.style.display = "none";
}

menubtn.addEventListener("click", openMenu);

menucl.addEventListener("click", closeMenu);



// For Dark and bright toggle btn
let darkbtn = document.querySelector("#ic-dark");
let brightbtn = document.querySelector("#ic-bright");

darkbtn.addEventListener("click", () => {
    document.body.classList.toggle("bright");

    darkbtn.style.display = "none";
    brightbtn.style.display = "block";
});

brightbtn.addEventListener("click", () => {
    document.body.classList.toggle("bright");

    brightbtn.style.display = "none";
    darkbtn.style.display = "block";
});

